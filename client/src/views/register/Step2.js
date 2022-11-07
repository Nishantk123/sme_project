import React, { useState } from "react";
import Select from "react-select";

const Step2 = ({ handleStep, handleDataChange, register_data }) => {
  const [active_tab, setActiveTab] = useState("COMPANY REGISTRATION");
  const tabs = [
    "COMPANY REGISTRATION",
    "COMPANY GENERAL PROFILE",
    "COMPANY ADDRESS",
  ];
  const handleTabChange = (name) => {
    setActiveTab(name);
  };
  const handleNext = (name) => {
    console.log(name);
    if (name === "step") {
      handleStep(3);
    } else {
      setActiveTab(name);
    }
  };
  const options = [
    {
      value: "Companies Limited by Shares",
      label: "Companies Limited by Shares",
    },
    {
      value: "Companies Limited by Guarantee",
      label: "Companies Limited by Guarantee",
    },
    { value: "Unlimited Companies", label: "Unlimited Companies" },
    {
      value: "One Person Companies (OPC)",
      label: "One Person Companies (OPC)",
    },
    { value: "Private Companies", label: "Private Companies" },
    { value: "Public Companies", label: "Public Companies" },
  ];
  const getCompanyAddressUI = () => {
    return (
      <div>
        <div className="row">
          <div className="col-sm-6">
            <h4>Company Address</h4>
            <div>Provide Your Registered Company Address</div>
            <div className="">
              <label for="floatingInput">Address line 1</label>
              <input
                type="text"
                class="form-control mt-1"
                id="floatingInput"
                value={register_data.c_address1}
              
                onChange={(e) => handleDataChange(e, "c_address1")}
              />
            </div>
            <div className="">
              <label for="floatingInput">Address line 2 (Optional)</label>
              <input
                type="text"
                class="form-control mt-1"
                id="floatingInput"
                value={register_data.c_address2}

                onChange={(e) => handleDataChange(e, "c_address2")}
              />
            </div>
            <div className="">
              <label for="floatingInput">Landmark (Optional)</label>
              <input
                type="text"
                class="form-control mt-1"
                id="floatingInput"
                value={register_data.c_landmark}
                onChange={(e) => handleDataChange(e, "c_landmark")}
              />
            </div>
            <div className="">
              <label for="floatingInput">City / Town</label>
              <input
                type="text"
                class="form-control mt-1"
                id="floatingInput"
                value={register_data.c_city}
                onChange={(e) => handleDataChange(e, "c_city")}
              />
            </div>
            <div className="">
              <label for="floatingInput">Select a state</label>
              <input
                type="text"
                class="form-control mt-1"
                id="floatingInput"
                value={register_data.c_state}
                
                onChange={(e) => handleDataChange(e, "c_state")}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <h4>Billing Address</h4>
            <input type="checkbox"  onChange={(e)=>handleDataChange(e,"same_address")}/> Same As Registered Aaddress
            <div className="">
              <label for="floatingInput">Address line 1</label>
              <input
                type="text"
                class="form-control mt-1"
                id="floatingInput"
                value={register_data.b_address1}
                onChange={(e) => handleDataChange(e, "b_address1")}
              />
            </div>
            <div className="">
              <label for="floatingInput">Address line 2 (Optional)</label>
              <input
                type="text"
                class="form-control mt-1"
                id="floatingInput"
                value={register_data.b_address2}
                onChange={(e) => handleDataChange(e, "b_address2")}
              />
            </div>
            <div className="">
              <label for="floatingInput">Landmark (Optional)</label>
              <input
                type="text"
                class="form-control mt-1"
                id="floatingInput"
                value={register_data.b_landmark}

                onChange={(e) => handleDataChange(e, "b_landmark")}
              />
            </div>
            <div className="">
              <label for="floatingInput">City / Town</label>
              <input
                type="text"
                class="form-control mt-1"
                id="floatingInput"
                value={register_data.b_city}
                onChange={(e) => handleDataChange(e, "b_city")}
              />
            </div>
            <div className="">
              <label for="floatingInput">Select a state</label>
              <input
                type="text"
                class="form-control mt-1"
                id="floatingInput"
                value={register_data.b_state}
                onChange={(e) => handleDataChange(e, "b_state")}
              />
            </div>
          </div>
        </div>

        <div className="mt-3">
          <button
            className="btn btn-primary"
            onClick={() => handleNext("COMPANY GENERAL PROFILE")}
          >
            Next
          </button>
        </div>
      </div>
    );
  };
  const getCompanyRegistrationUI = () => {
    return (
      <div>
        <h4 className="text-gray">Company Registration</h4>
        <div class=" mb-2">
          <label for="floatingInput">Company Name</label>
          <input type="email" class="form-control mt-1" id="floatingInput" />
        </div>
        <div class="mb-2">
          <label for="floatingInput">Email</label>
          <input type="email" class="form-control mt-1" id="floatingInput" />
        </div>
        <div class="mb-2">
          <label for="floatingInput">Company Type</label>
          <select class="form-control mt-1">
            <option value="">select</option>
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
        </div>
        <div class="mb-2">
          <label for="floatingInput">CIN Number(Optional)</label>
          <input type="email" class="form-control mt-1" id="floatingInput" />
        </div>
        <div className="mb-2">
          <label for="floatingInput">MSME</label>
          <div className="">
            <input type="radio" /> Yes
            <input type="radio" className="ms-3" /> No
          </div>
        </div>
        <div class="mb-2">
          <label for="floatingInput">PAN Number</label>
          <input type="email" class="form-control mt-1" id="floatingInput" />
        </div>
        <div class=" mb-2">
          <label for="floatingInput">GST Number</label>
          <input type="email" class="form-control mt-1" id="floatingInput" />
        </div>
        <div>
          <button
            className="btn btn-primary"
            onClick={() => handleNext("COMPANY ADDRESS")}
          >
            Next
          </button>
        </div>
      </div>
    );
  };

  const getGeneralProfileUI = () => {
    return (
      <div>
        <h4>Company General Profile</h4>
        <div>
          <div className="row">
            <div className="col-sm-6">
              <div class="mb-2">
                <label for="floatingInput">Company Name</label>
                <input
                  type="text"
                  class="form-control mt-1"
                  id="floatingInput"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <label for="floatingInput">upload a company logo</label>
              <input type="file" class="form-control " id="floatingInput" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <label>Select Categories Company Is Present In</label>
              <input type="text" class="form-control mt-1" id="floatingInput" />
            </div>
            <div className="col-sm-6">
              <label>Company Present Across India</label>
              <div className="mt-1">
                <input type="radio" name="type" /> Yes
                <input type="radio" name="type" className="ms-3" /> No
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <label>Annual Sales of the Company</label>
              <Select isMulti options={options} onChange={() => {}} />
            </div>
            <div className="col-sm-6">
              <label>Employee Number</label>
              <input type="text" class="form-control mt-1" id="floatingInput" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <label>Please provide company website URL</label>
              <input type="text" class="form-control mt-1" id="floatingInput" />
            </div>
            <div className="col-sm-6">
              <label>Facebook page</label>
              <input type="text" class="form-control mt-1" id="floatingInput" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <label>Instagram page</label>
              <input type="text" class="form-control mt-1" id="floatingInput" />
            </div>
            <div className="col-sm-6">
              <label>Brief description of the company</label>
              <input type="text" class="form-control mt-1" id="floatingInput" />
            </div>
          </div>
        </div>
        <div>
          <button
            className="btn btn-primary"
            onClick={() => handleNext("step")}
          >
            Next
          </button>
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
            <div className="col-sm-10">
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
                {active_tab === "COMPANY GENERAL PROFILE" &&
                  getGeneralProfileUI()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2;
