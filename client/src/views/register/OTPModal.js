import React, { useState } from "react";
import Modal from "react-modal";
import OtpInput from "react18-input-otp";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const OTPModal = ({ open, closeModal, isVerified = false ,handleSubmit, handleVerified}) => {
  const [otp, setOtp] = useState("");
  const handleChange = (enteredOtp) => {
    setOtp(enteredOtp);
  };
  return (
    <Modal
      isOpen={open}
      //   onAfterOpen={afterOpenModal}
      //   onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      {isVerified ? (
        <div>
          <h4 className="text-dark text-center">Thank You</h4>
          <div className="text-center text-gray">
            <small>YOUR NUMBER HAS BEN VERIFIED </small>
          </div>
          <div className="text-center text-gray">
            <small>+919898989898</small>
          </div>
          <button className="btn btn-primary w-100 my-3" onClick={handleSubmit}>NEXT</button>
        </div>
      ) : (
        <div>
          <h3 className="text-dark text-center my-3">
            Enter Verification Code
          </h3>
          <p className="text-primary text-center">
            A VERIFICATION CODE HAS BEEN SENT TO{" "}
          </p>
          <p className="text-dark text-center">+919898989898</p>
          <OtpInput
            //   className="opt-data"
            inputStyle={{
              width: "2.4rem",
              height: "2.4rem",
              margin: "10px 1rem",
              fontSize: "1rem",
              borderRadius: 4,
              border: "2px solid rgba(0,0,0,0.3)",
            }}
            value={otp}
            onChange={handleChange}
            numInputs={6}
            //   separator={<span> -</span>}
          />
          <button className="btn btn-primary w-100 my-3" onClick={handleVerified}>VERIFY CODE</button>
          <div className="text-primary text-center" >
            <small>Resend verification code</small>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default OTPModal;
