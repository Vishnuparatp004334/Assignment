import React from "react";
import "./Style/Style.css";
import school from "./Assits/Cipherschools.png";
import { Link } from "react-router-dom";
const Home = () => {
    // const squares = document.querySelector('.squares');
    //     for (var i = 1; i < 365; i++) {
    //         const level = Math.floor(Math.random() * 3);
    //         squares.insertAdjacentHTML('beforeend', `<li data-level="${level}"></li>`);
    //     }
  return (
    <>
      <header className="header">
        <div className="left">
          <img src={school} alt="avatar" />
          <a href="/">CipherSchools</a>

          <div className="Browse">
            <select name="Browse" id="Browse">
              <option>Browse</option>
              <option>App Development</option>
              <option>Web Development</option>
              <option>Game Development</option>
              <option>Data Structures</option>
              <option>Programming</option>
              <option>Machine Learning</option>
              <option>Data Science</option>
              <option>Others</option>
            </select>
          </div>
        </div>
        <div className="right">
          <div className="in full">
            <span>
              <i className="fas fa-search"></i>
            </span>
            <input type="text" placeholder="Search and Learn" />
          </div>
          <div className="bell fullbell">
            <i className="fas fa-regular fa-bell"></i>
            <span>0</span>
          </div>
          <i className="fas fa-solid fa-user" id="use"></i>
          <a href="/">
            <img src={school} alt="" /> 0
          </a>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
              checked
            />
          </div>
          <i className="fas fa-regular fa-bell" id="smbell"></i>
          <span id="ser">
            <i className="fas fa-search"></i>
          </span>
        </div>
      </header>
      <div>
        <section className="profile">
          <div className="left">
            <span>
              <i className="fas fa-solid fa-user"></i>
            </span>
            <Link to="./Personal">
              <i className="fas fa-solid fa-pen" id="pen"></i>
            </Link>
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
          <div className="map-details">
            <div className="graph">
              <ul className="months">
                <li>Jan</li>
                <li>Feb</li>
                <li>Mar</li>
                <li>Apr</li>
                <li>May</li>
                <li>Jun</li>
                <li>Jul</li>
                <li>Aug</li>
                <li>Sep</li>
                <li>Oct</li>
                <li>Nov</li>
                <li>Dec</li>
              </ul>
              <ul className="days">
                <li>Sun</li>
                <li>Mon</li>
                <li>Tue</li>
                <li>Wed</li>
                <li>Thu</li>
                <li>Fri</li>
                <li>Sat</li>
              </ul>
              <ul className="squares">{/* <!-- added via javascript --> */}</ul>
            </div>
          </div>
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
            <Link to="./Password" className="btn">
              Edit
            </Link>
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
            <Link to="/Interest" className="btn">
              Edit
            </Link>
          </div>
          <a href="/">Web Development</a>
          <a href="/">Machine Learning</a>
        </div>
      </div>
    </>
  );
};

export default Home;
