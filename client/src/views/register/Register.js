import React, { useState } from "react";
import logo from "../../assets/img/logo.png";
import FirstView from "./FirstView";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
const Register = () => {
  const [is_register, setIsRegister] = useState(false);
  const [user_role, setUserRole] = useState("")
  const [step, setStep] = useState(0)

  const handleSelect = (role) => {
    setIsRegister(true);
    setUserRole(role)
    setStep(1)
  };
  const handleStep = (number) =>{
    setStep(number)
  }
  console.log(step)
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-3 bg-dark left-side">
            <img className="register-logo" src={logo} />
          </div>
          <div className="col-sm-8 col-md-8 col-lg-9">
            {
              !is_register&& <FirstView handleSelect={handleSelect} />
            }
            {
              step === 1&& <Step1 handleStep={handleStep}/>
            }
            {
              step === 2 && <Step2  handleStep={handleStep}/>
            }
            {
              step === 3 && <Step3 handleStep={handleStep}/>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
