import React from "react";
import './Style/Style.css'
import { Link } from "react-router-dom";
const Personal = () => {
  return (
    <Link to='/' className="myProfile">
      <div className="pro">
        <div className="head">
          <h2>Profile Update</h2>
          <Link to="/"><i className="fas fa-times" id="close"></i></Link>
        </div>
        <div className="pic">
          <span>
            <i className="fas fa-solid fa-user"></i>
          </span>
          <div className="pic-details">
            <div className="input">
              <p>First Name</p>
              <input type="text" value="Vishnu" />
            </div>
            <div className="input">
              <p>Last Name</p>
              <input type="text" value="Pratap Singh" />
            </div>
            <div className="input">
              <p>Email Address</p>
              <input type="text" value="me20b1040@iiitdm.ac.in" />
            </div>
            <div className="input">
              <p>Mobile Number</p>
              <input type="text" value="9935352734" />
            </div>
            <div className="btn">
              <Link to='/' className="btn1">Cancel</Link>
              <button className="btn2">Save</button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Personal;
