import React from "react";
import user from "../../assets/icons/users.png";

const FirstView = ({handleSelect}) =>{
    return(
        <div>
            <div className="d-flex justify-content-end mt-3">
              <div className="mx-3">
                <span>
                  <small>Already have an account?</small>
                </span>{" "}
                <span className="text-primary">
                  <small>Log In</small>
                </span>
              </div>
              <button className="btn btn-primary">
                <small>login</small>
              </button>
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-sm-10">
                  <h3 className="text-gray">Choose a Role</h3>
                </div>
              </div>
              <div className="row my-5 justify-content-center">
                <div className="col-sm-5">
                  <div className="card">
                    <div className="card-body register-user-card">
                      <div className="card-icon">
                        <img src={user} />
                      </div>
                      <h5 className="text-primary text-center my-3">
                        I AM A CLIENT
                      </h5>
                      <div className="text-center">
                        <button className="btn btn-primary register-now-btn" onClick={()=>handleSelect("client")}>
                          Register Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-5">
                  <div className="card">
                    <div className="card-body register-user-card">
                      <div className="card-icon">
                        <img src={user} />
                      </div>
                      <h5 className="text-primary text-center my-3">
                        I AM AN AGENT
                      </h5>
                      <div className="text-center">
                        <button className="btn btn-primary register-now-btn" onClick={()=>handleSelect("agent")}>
                          Register Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row second-row justify-content-center">
                <div className="col-sm-5">
                  <div className="card">
                    <div className="card-body register-user-card">
                      <div className="card-icon">
                        <img src={user} />
                      </div>
                      <h5 className="text-primary text-center my-3">
                        I AM A FREELANCE
                      </h5>
                      <div className="text-center">
                        <button className="btn btn-primary register-now-btn" onClick={()=>handleSelect("freelance")}>
                          Register Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-5">
                  <div className="card">
                    <div className="card-body register-user-card">
                      <div className="card-icon">
                        <img src={user} />
                      </div>
                      <h5 className="text-primary text-center my-3">
                        I AM A CLIENT ADMIN
                      </h5>
                      <div className="text-center">
                        <button className="btn btn-primary register-now-btn" onClick={()=>handleSelect("admin")}>
                          Register Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}

export default FirstView;