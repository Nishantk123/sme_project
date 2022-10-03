import React, { useState } from "react";

const Step2 = ({handleStep}) => {
  const [active_tab, setActiveTab] = useState("COMPANY REGISTRATION");
  const tabs = [
    "COMPANY REGISTRATION",
    "COMPANY ADDRESS",
    "COMPANY GENERAL PROFILE",
  ];
  const handleTabChange = (name) => {
    setActiveTab(name);
  };
  const handleNext = (name) =>{
    console.log(name)
    if(name === "step"){
      handleStep(3)
    }else{
      setActiveTab(name);
    }
  }
  const getCompanyAddressUI = () => {
    return (
      <div>
        <h3>Company Address</h3>
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control custom-input"
            id="floatingInput"
          />
          <label for="floatingInput">Address line 1</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control custom-input"
            id="floatingInput"
          />
          <label for="floatingInput">Address line 2 (Optional)</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control custom-input"
            id="floatingInput"
          />
          <label for="floatingInput">Landmark(Optional)</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control custom-input"
            id="floatingInput"
          />
          <label for="floatingInput">Select State</label>
        </div>
        <div>
          <button className="btn btn-primary" onClick={()=>handleNext("COMPANY GENERAL PROFILE")}>Next</button>
        </div>
      </div>
    );
  };
  const getCompanyRegistrationUI = () => {
    return (
      <div>
        <h3>Company Register</h3>
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control custom-input"
            id="floatingInput"
          />
          <label for="floatingInput">Company Name</label>
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
            type="email"
            class="form-control custom-input"
            id="floatingInput"
          />
          <label for="floatingInput">Company Type</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control custom-input"
            id="floatingInput"
          />
          <label for="floatingInput">CIN Number(Optional)</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control custom-input"
            id="floatingInput"
          />
          <label for="floatingInput">PAN Number</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control custom-input"
            id="floatingInput"
          />
          <label for="floatingInput">GST Number</label>
        </div>
        <div>
          <button className="btn btn-primary" onClick={()=>handleNext("COMPANY ADDRESS")}>Next</button>
        </div>
      </div>
    );
  };

  const getGeneralProfileUI = () => {
    return (
      <div>
        <h3>Company General Profile</h3>
        <div>
          <div class="form-floating mb-3">
            <input
              type="file"
              class="form-control custom-input"
              id="floatingInput"
            />
            <label for="floatingInput">upload a company logo</label>
          </div>
          <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control custom-input"
            id="floatingInput"
          />
          <label for="floatingInput">Company Name</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control custom-input"
            id="floatingInput"
          />
          <label for="floatingInput">Company Type</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control custom-input"
            id="floatingInput"
          />
          <label for="floatingInput">Company Website</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control custom-input"
            id="floatingInput"
          />
          <label for="floatingInput">Company Size</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control custom-input"
            id="floatingInput"
          />
          <label for="floatingInput">About Company</label>
        </div>
        </div>
        <div>
          <button className="btn btn-primary" onClick={()=>handleNext("step")}>Next</button>
        </div>
      </div>
    );
  };
  return (
    <div className="conatiner">
      <div className="d-flex justify-content-end">
        <button className="btn btn-primary my-3">Back</button>
      </div>
      <div className="row justify-content-center">
        <div className="col-sm-10">
          <div className="row">
            <div className="col-sm-8">
              <div className="tab-container d-flex my-3">
                {tabs.map((d, index) => {
                  return (
                    <div
                      key={index}
                      className={d === active_tab ? "tab-active" : "tab"}
                      onClick={() => handleTabChange(d)}
                    >
                      {d}
                    </div>
                  );
                })}
              </div>
              <div>
                {active_tab === "COMPANY REGISTRATION" &&
                  getCompanyRegistrationUI()}
                {active_tab === "COMPANY ADDRESS" && getCompanyAddressUI()}
                {active_tab === "COMPANY GENERAL PROFILE" && getGeneralProfileUI()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2;
