import React from 'react'
import './Style/Style.css'
import { Link } from "react-router-dom";
const Profile = () => {
  return (
    <div>
       <section className="profile">
        <div className="left">

            <span> <i className="fas fa-solid fa-user"></i>
            </span>
            <Link to="/Personal"><i className="fas fa-solid fa-pen" id="pen"></i></Link>

            <div className="details">
                <p>Hello,</p>
                <h4>Vishnu Pratap Singh</h4>
                <p>me20b1040@iiitdm.ac.in</p>
            </div>
        </div>
        <div className="right">
            <p>0 Followers</p>
        </div>
    </section>
    </div>
  )
}

export default Profile
