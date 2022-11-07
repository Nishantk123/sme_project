import React from "react";
import feature from "../assets/img/feature.png";
import menu from "../assets/img/menu.png";
import eye from "../assets/img/eye.svg";
import community from "../assets/img/community.png";
import location from "../assets/img/location.png";
import calender from "../assets/img/calender.png";
import icon_reports from "../assets/img/icon_reports.png";
const JobPool = () => {
  const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="container">
      <div className="card filter-card">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <select className="form-control">
                <option>select</option>
                <option>All</option>
                <option>Standred</option>
                <option>Express</option>
              </select>
              <input className="form-control mx-3" placeholder="Search" />
            </div>
            <div className="d-flex">
              <div className="py-2">From</div>
              <input type="date" className="form-control mx-2" />
              <div className="py-2">To</div>
              <input type="date" className="form-control mx-2" />
            </div>
            <div div className="border-left-1">
              <img src={feature} className="ms-3" />
              <img src={menu} className="mx-2" />
              <dib className="btn btn-primary">+ Create Job</dib>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {count.map((data, index) => {
          return (
            <div className="col-sm-4 my-3">
              <div className="card">
                <div className="card-body py-0">
                  <div className="d-flex justify-content-between">
                    <div>
                      <small>standard</small>
                    </div>
                    <div>
                      <img src={eye} />
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="py-3">
                      <img src={community} />
                    </div>
                    <div className="p-2">
                      <h6 className="text-primary">
                        Demographic survey for urban area
                      </h6>
                      <small>Published on 17-08-2022</small>
                      <div className="d-flex my-2">
                        <img src={location} className="job-card-icon" />
                        <div className="mx-2">Mumbai, Nashik, Pune... </div>

                        {/* 29/10/2022 - 28/11/2022 Random Sample */}
                      </div>
                      <div className="d-flex">
                        <img src={calender} className="job-card-icon" />
                        <div className="mx-2">29/10/2022 - 28/11/2022</div>
                      </div>
                      <div className="d-flex my-2">
                        <img src={icon_reports} className="job-card-icon" />
                        <div className="mx-2">Random Sample</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <div className="d-flex justify-content-between">
                    <div className="">
                      <small>price offer for job</small>
                      <div>₹ 6000.00/- + GST </div>
                    </div>
                    <div className="">
                      <small>sample size</small>
                      <div className="text-center">500</div>
                    </div>
                    <div>
                      <div className="btn btn-primary">
                        <small>Apply for job</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JobPool;
