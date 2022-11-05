import React, { useState } from "react";
import OTPModal from "./OTPModal";

const Step1 = ({ handleStep }) => {
  const [open, setOpen] = useState(false);
  const [price_select, setPriceSelect] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const closeModal = () => {
    setOpen(false);
  };
  const handleSendVerification = () => {
    setOpen(true);
  };
  const handleVerified = () => {
    setIsVerified(true);
  };
  const handleSubmit = () => {
    handleStep(2);
    setOpen(false);
  };
  const getPlanUI = () => {
    return (
      <div className="">
        <div className="my-3">
          <h4 className="text-primary">Create Account</h4>
        </div>
        <div className="text-primary my-3">
          Please Choose your plan in order to Proceed
        </div>
        <div className="card my-3">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-3">
                <h4>
                  <strong>Standard Plan</strong>
                </h4>
                <h1>
                  <strong>₹80</strong>
                </h1>
              </div>
              <div className="col-sm-3">
                <div className="">
                  <small>
                    <strong>Lorem deterruisset</strong>
                  </small>
                </div>
                <div className="">
                  <small>
                    <strong>Hinc lorem</strong>
                  </small>
                </div>
                <div className="">
                  <small>
                    <strong>Autem molestiae</strong>
                  </small>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="">
                  <small>
                    <strong>Lorem deterruisset</strong>
                  </small>
                </div>
                <div className="">
                  <small>
                    <strong>Hinc lorem</strong>
                  </small>
                </div>
                <div className="">
                  <small>
                    <strong>Autem molestiae</strong>
                  </small>
                </div>
              </div>
              <div className="col-sm-3 pt-3 text-center">
                <button
                  className="btn btn-primary "
                  onClick={() => setPriceSelect("standard")}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-3">
                <h4>
                  <strong>Express Plan</strong>
                </h4>
                <h1>
                  <strong>₹130</strong>
                </h1>
              </div>
              <div className="col-sm-3">
                <div className="">
                  <small>
                    <strong>Lorem deterruisset</strong>
                  </small>
                </div>
                <div className="">
                  <small>
                    <strong>Hinc lorem</strong>
                  </small>
                </div>
                <div className="">
                  <small>
                    <strong>Autem molestiae</strong>
                  </small>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="">
                  <small>
                    <strong>Lorem deterruisset</strong>
                  </small>
                </div>
                <div className="">
                  <small>
                    <strong>Hinc lorem</strong>
                  </small>
                </div>
                <div className="">
                  <small>
                    <strong>Autem molestiae</strong>
                  </small>
                </div>
              </div>
              <div className="col-sm-3 pt-3 text-center">
                <button
                  className="btn btn-primary "
                  onClick={() => setPriceSelect("express")}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="container px-3 my-3">
      <div className="d-flex justify-content-end mb-2">
        <button className="btn btn-outline-primary">back</button>
      </div>
      <div className="row justify-content-center">
        <div className="col-sm-10">
          {price_select === "" && getPlanUI()}
          {/* <div>
            <small className="text-primary">STEP 1 OF 3</small>
          </div> */}
          {price_select !== "" && (
            <div>
              <div className="my-2">
                <h4 className="text-primary">Create Account</h4>
              </div>
              <div className="w-75">
                <div class=" mb-2">
                  <label for="floatingInput ">First Name</label>
                  <input
                    type="email"
                    placeholder="Please Enter First Name"
                    class="form-control my-2"
                    id="floatingInput"
                  />
                </div>
                <div class=" mb-2">
                  <label for="floatingInput ">Midle Name</label>
                  <input
                    type="email"
                    class="form-control my-2 "
                    placeholder="Please Enter Middle Name"
                    id="floatingInput"
                  />
                </div>
                <div class=" mb-2">
                  <label for="floatingInput ">Last Name</label>
                  <input
                    type="email"
                    class="form-control my-2 "
                    placeholder="Please Enter last Name"
                    id="floatingInput"
                  />
                </div>
                <div class=" mb-2">
                  <label for="floatingInput">Email</label>
                  <input
                    type="email"
                    class="form-control "
                    placeholder="Please Enter Email"
                    id="floatingInput"
                  />
                </div>
                <div class="mb-2">
                  <label for="floatingInput">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Please Enter Password"
                    id="floatingInput"
                  />
                </div>
                <div class=" mb-2">
                  <label for="floatingInput"> Verify Password</label>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Please Enter verify Password"
                    id="floatingInput"
                  />
                </div>
                <div class="mb-3">
                <label for="floatingInput">Mobile Number</label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Please Enter Mobile Number"
                    id="floatingInput"
                  />
                </div>
                <div>
                  <button
                    className="btn btn-primary px-5 rounded-pill"
                    onClick={handleSendVerification}
                  >
                    SEND VERIFICATION CODE
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <OTPModal
        open={open}
        closeModal={closeModal}
        isVerified={isVerified}
        handleSubmit={handleSubmit}
        handleVerified={handleVerified}
      />
    </div>
  );
};

export default Step1;
