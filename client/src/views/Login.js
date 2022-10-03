import React from "react";
import logo from "../assets/img/logo.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const history = useNavigate()

    const handleSignUp = () =>{
        history('/register')
    }
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-4 col-md-4 col-lg-3 bg-dark left-side">
          <img className="register-logo" src={logo} />
        </div>
        <div className="col-sm-8 col-md-8 col-lg-9">
          <div className="row justify-content-center">
            <div className="col-sm-8">
              <h3 className="text-dark mt-5">Welcome Back</h3>
              <h6 className="text-dark mb-3">Singin To Continue</h6>
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control custom-input"
                  id="floatingInput"
                />
                <label for="floatingInput">Mobile/Email</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="password"
                  class="form-control custom-input"
                  id="floatingInput"
                />
                <label for="floatingInput">Password</label>
              </div>
              <div className="my-3 d-flex justify-content-end text-primary">
              Forgot Password
              </div>
              <div className="">
                <button className="btn btn-primary w-100 my-3">
                    Login
                </button>
              </div>
              <div className="">
                <button className="btn btn-primary w-100 my-3" onClick={handleSignUp}>
                    Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
