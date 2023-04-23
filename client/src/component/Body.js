import React from "react";
import "./Style/Style.css";
import { Link } from "react-router-dom";
const Body = () => {
  return (
    <div className="con">
      <div className="about">
        <div className="abo">
          <h5>ABOUT ME</h5>
          <button className="btn">Edit</button>
        </div>
        <textarea
          name=""
          id="text"
          cols="100"
          rows="4"
          placeholder="Add something about you"
        ></textarea>
      </div>
      <hr />
      <div className="map">
        <h5>CIPHER MAP</h5>
        <div className="map-details"></div>
      </div>
      <hr />
      <div className="web">
        <div className="web-details">
          <h5>ON THE WEB</h5>
          <button className="btn">Edit</button>
        </div>
        <form action="">
          <div className="inputBox">
            <div className="input">
              <span>Linkedin</span>
              <div className="in">
                <i className="fab fa-linkedin"></i>
                <input type="text" placeholder="LinkedIn" />
              </div>
            </div>
            <div className="input">
              <span>Github</span>
              <div className="in">
                <i className="fab fa-github"></i>
                <input type="text" placeholder="GitHub" />
              </div>
            </div>
          </div>
          <div className="inputBox">
            <div className="input">
              <span>Facebook</span>
              <div className="in">
                <i className="fab fa-facebook"></i>
                <input type="text" placeholder="Facebook" />
              </div>
            </div>
            <div className="input">
              <span>Twitter</span>
              <div className="in">
                <i className="fab fa-twitter"></i>
                <input type="test" placeholder="Twitter" />
              </div>
            </div>
          </div>
          <div className="inputBox">
            <div className="input">
              <span>Instagram</span>
              <div className="in">
                <i className="fab fa-instagram"></i>
                <input type="text" placeholder="Instagram" />
              </div>
            </div>
            <div className="input">
              <span>Website</span>
              <div className="in">
                <i className="fas fa-globe"></i>
                <input type="text" placeholder="Website" />
              </div>
            </div>
          </div>
        </form>
      </div>
      <hr />
      <div className="personal">
        <div className="per">
          <h5>PROFESSIONAL INFORMATION</h5>
          <button className="btn">Edit</button>
        </div>
        <form action="">
          <div className="inputBox">
            <div className="input">
              <span>Highest education</span>
              <select name="education" id="education">
                <option>Primary</option>
                <option>Secondary</option>
                <option>Higher Secondary</option>
                <option>Graduation</option>
                <option>Post Graduation</option>
              </select>
            </div>
            <div className="input">
              <span>What do you do currently?</span>
              <select name="education" id="education">
                <option>Schooling </option>
                <option>College Students</option>
                <option>Teaching</option>
                <option>Job</option>
                <option>Freelancing</option>
              </select>
            </div>
          </div>
        </form>
      </div>
      <hr />
      <div className="password">
        <div className="pass">
          <h5>PASSWORD & SECURITY</h5>
          <Link to='./Password' className="btn">Edit</Link>
        </div>
        <div className="input">
          <span>Password</span>
          <input type="password" value="password" />
        </div>
      </div>
      <hr />
      <div className="interest">
        <div className="pass">
          <h5>INTERESTS</h5>
          <Link to className="btn">Edit</Link>
        </div>
        <a href="/">Web Development</a>
        <a href="/">Machine Learning</a>
      </div>
    </div>
  );
};
export default Body;
