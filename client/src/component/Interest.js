import React from "react";
import './Style/Style.css'
import { Link } from "react-router-dom";
const Interest = () => {
  return (
    <Link to='/' className="myinterest">
      <div className="inte">
        <div className="course">
          <a href="/">App Development</a>
          <a href="/">Web Development</a>
        </div>
        <div className="course">
          <a href="/">Game Development</a>
          <a href="/">Data Structures</a>
        </div>
        <div className="course">
          <a href="/">Programming</a>
          <a href="/">Machine Learning</a>
        </div>
        <div className="course">
          <a href="/">Data Science</a>
          <a href="/">Other</a>
        </div>
        <div className="btn">
          <Link to='/' className="btn1">Cancel</Link>
          <button className="btn2">Save</button>
        </div>
      </div>
    </Link>
  );
};

export default Interest;
