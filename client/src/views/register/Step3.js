import React from "react";
import { useNavigate } from "react-router-dom";
const Step3 = () => {
    const history = useNavigate()
    const handleSubmit = ()=>{
        history("/login")
    }   
  return (
    <div className="container">
      <div className="d-flex justify-content-end mb-3">
        <button className="btn btn-outline-primary">back</button>
      </div>
      <div className="row justify-content-center">
        <div className="col-sm-10">
          <div>
            <small className="text-primary">STEP 3 OF 3</small>
          </div>
          <div className="my-3">
            <h4 className="text-primary">Contact Person</h4>
          </div>
          <div className="row">
            <div className="col-sm-8">
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control custom-input"
                  id="floatingInput"
                />
                <label for="floatingInput">Name</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control custom-input"
                  id="floatingInput"
                />
                <label for="floatingInput">Family Name</label>
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
                <label for="floatingInput">Mobile Number</label>
              </div>
              <div>
                <button className="btn btn-primary" onClick={handleSubmit}>Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Step3;