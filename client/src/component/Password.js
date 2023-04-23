import React from "react";
import './Style/Style.css'
import { Link } from "react-router-dom";
const Password = () => {
  return (
    <Link to='/' className="mypassword">
      <div className="newpass">
        <div className="input">
          <p>Current Password</p>
          <input type="password" value="Vishnu Pratap Singh" />
        </div>
        <div className="input">
          <p>New Password</p>
          <input type="password" placeholder="New Password" />
        </div>
        <div className="input">
          <p>Confirm Password</p>
          <input type="password" placeholder="Confirm Password" />
        </div>
        <div className="btn">
          <Link to='/' className="btn1">Cancel</Link>
          <button className="btn2">Save</button>
        </div>
      </div>
    </Link>
  );
};

export default Password;
