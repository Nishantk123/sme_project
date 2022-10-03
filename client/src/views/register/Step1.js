import React, { useState } from "react";
import OTPModal from "./OTPModal";

const Step1 = ({handleStep}) => {
  const [open, setOpen] = useState(false);
  const [isVerified, setIsVerified] = useState(false)
  const closeModal = () => {
    setOpen(false);
  };
  const handleSendVerification = () =>{
    setOpen(true)
  }
  const handleVerified = () =>{
    setIsVerified(true)
  }
  const handleSubmit= () =>{
    handleStep(2)
    setOpen(false);
  }
  return (
    <div className="container px-3 my-3">
      <div className="d-flex justify-content-end mb-3">
        <button className="btn btn-outline-primary">back</button>
      </div>
      <div className="row justify-content-center">
        <div className="col-sm-10">
          <div>
            <small className="text-primary">STEP 1 OF 3</small>
          </div>
          <div className="my-3">
            <h4 className="text-primary">Create Account</h4>
          </div>
          <div className="w-75">
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control custom-input"
                id="floatingInput"
              />
              <label for="floatingInput">Full Name</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control custom-input"
                id="floatingInput"
              />
              <label for="floatingInput">Email</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="password"
                class="form-control custom-input"
                id="floatingInput"
              />
              <label for="floatingInput">Password</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="password"
                class="form-control custom-input"
                id="floatingInput"
              />
              <label for="floatingInput">Password</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control custom-input"
                id="floatingInput"
              />
              <label for="floatingInput">Mobile Number</label>
            </div>
            <div>
              <button className="btn btn-primary px-5 rounded-pill" onClick={handleSendVerification}>
                Send Verification code
              </button>
            </div>
          </div>
        </div>
      </div>
      <OTPModal open={open} closeModal={closeModal} isVerified={isVerified} handleSubmit={handleSubmit} handleVerified={handleVerified}/>
    </div>
  );
};

export default Step1;
