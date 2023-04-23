const express = require("express");
const router = new express.Router();
const User = require("../model/User");
const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');
const JWT_SECRET = "mynameisvishnupratapsinghrajput";

// middleware function-------------------------------------------
const varifyuser = async(req, res, next)=>{
    try {
        const { email } = req.method == "GET" ? req.query : req.body;

          // check th euser existance
          let exist = await User.findOne({ email });
          if (!exist) return res.status(404).send({ error: "Can't find User!" });
          next();
    } catch (error) {
        return res.status(404).send({ error: "Authentication Error" });
    }
}
const Auth = async(req,res, next)=>{
    try {
        const token = req.header.authorization.split(" ")[1];

        const decodeToken = await jwt.verify(token, JWT_SECRET);
        req.user = decodeToken
        next();
    } catch (error) {
        res.status(401).json({ error: "Authentication Failed" })
    }
}

// ----------------------------Post Method------------------------

// --------------------------Register User------------------------
router.post("/register", async (req, res) => {
    try {
        const { firstName, lastName,email ,mobile, password,} = req.body;

        //  check for existing email
        user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ error: "Sorry email is already exist" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        user = await User.create({
            firstName,
            lastName,
            email,
            mobile,
            password: hashedPassword,
        })

        const newUser = await user.save();
        res.status(201).send(newUser);

    } catch (error) {
        return res.status(500).send(error);
    }
})

// -----------------Login user-------------------------------------
router.post("/login",varifyuser, async(req,res)=>{
    const{email, password} = req.body;
    try {
        let user = await User.findOne({email});
        if (!user) {
            return res.status(400).json({ error: "Sorry Username is not found" });
        }
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            res.status(500).json("Invalid Login")
        }

        const token = jwt.sign({
            userId: user._id,
            useremail: user.email
        }, JWT_SECRET, { expiresIn: "24h" });

        return res.status(200).send({
            msg: "Login Successful",
            useremail: user.email,
            token
        })
    }  catch (error) {
        return res.status(500).send(error);
    }
})


// ----------------------------------------------------------------

// -------------------------Get Request----------------------------
router.get("/user/:email", async (req, res) => {

    const { email } = req.params;
    // res.send(username)
    try {
        if (!email) return res.status(501).send({ error: "Invalid email" });

        let newuser = await User.findOne({ email });
        if (!newuser) {
            return res.status(501).send({ error: "Couldn't Find the User" });
        }
        // here we remove password field from user data and convert it into json
        const { password, ...rest } = Object.assign({}, newuser.toJSON());
        return res.status(201).send(rest)
    } catch (error) {
        return res.status(404).send({ error: "Cannot find User Data" });
        // return res.send(username);
    }
})

// -----------------------------------------------------------------

// ---------------------------Put Request---------------------------
router.put("/updateuser", Auth, async (req, res) => {
    try {
        // const id = req.query.id;
        const { userId } = req.user;
        if (userId) {
            const body = req.body;

            // update the data
            const updateuser = await User.updateOne({ _id: userId }, body)

            return res.status(201).send({ msg: "Record Updated...!" })
        }
    } catch (error) {
        return res.status(401).send({ error: "not able to update" });
    }
})
router.put("/changePassword", varifyuser, async(req, res)=>{
    const {email, password} = req.body;
    try {
        if (!req.app.locals.resetSession) return res.status(440).send({ error: "Session expired" });
        let user = await User.findOne({email})
        if (!user) {
            return res.status(404).send({error: "username is not found"});
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = await User.updateOne({email: email}, {password: hashedPassword});
        req.app.locals.resetSession = false;
        return res.status(201).send({ msg: "Record Updated" })
    }  catch (error) {
        return res.status(401).send({ error });
    }
})
router.put('/follow',Auth, (req,res)=>{
    User.findByIdAndUpdate(req.body.followId, {
        $push:{follower:req.user._id}
    },{
        new:true
    },(err,result)=>{
        if (err) {
            return res.status(422).json({error:err})
        }
        User.findByIdAndUpdate(req.user._id,{
            $push:{following:req.body.followId}
        },{new:true}).then(result=>{
            res.json(result)
        }).catch(err=>{
            return res.status(404).json({error:err})
        })
    })
})
router.put('/unfollow',Auth, (req,res)=>{
    User.findByIdAndUpdate(req.body.unfollowId, {
        $pull:{follower:req.user._id}
    },{
        new:true
    },(err,result)=>{
        if (err) {
            return res.status(422).json({error:err})
        }
        User.findByIdAndUpdate(req.user._id,{
            $pull:{following:req.body.unfollowId}
        },{new:true}).then(result=>{
            res.json(result)
        }).catch(err=>{
            return res.status(404).json({error:err})
        })
    })
})

// -----------------------------------------------------------------


module.exports = router;