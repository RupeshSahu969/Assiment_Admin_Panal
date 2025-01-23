import React from "react";
import logo from "../asset/logo.png";
import Rectangle1 from "../asset/Rectangle 9.png";
import "../Style/nav.css";


const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-darkcyan">
        <div className="container-fluid d-flex justify-content-between align-items-center">
         <div>
         <img className="logoimg" src={logo} alt="logo" />
         </div>
          <form className="d-flex gap-2" role="search">
            <button className="btn btn-login" type="submit">
              Login
            </button>
            <button className="btn btn-signup" type="submit">
              Sign Up
            </button>
          </form>
        </div>
      </nav>
      <div className="card">
        <div class="card1">
          <img src={Rectangle1} alt="Rectangle" />
        </div>
        <div class="card2">
          <h3>Login</h3>
          <p>Fill in your credentials and click on the Login button</p>
          <form className="form-data">
            <div className="justify-content-center">
              <div className="col-9 justify-content-center">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input type="email" id="email" className="form-control mb-3" />

                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-control mb-3"
                  
                />

                <button type="button" className="btn btn-btn3">
                  Login
                </button>

                <div>
                  <p className="accound">
                    Don’t have an account? <strong>Sign Up</strong>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
