import React from "react";
import Data from "./Data";
import Maincontent from "./Maincontent";

const Sidebar = () => {
  return (
    <div className="container-fluid">
      <div className="row maincontent">
        <div className="col-sm-2 sidebar ">
          <div className="container">
            <div className="card">
              <div className="card-body sideview">
                <div className="text-center">
                  <img
                    className="sidebarprofimg"
                    src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png"
                  ></img>
                </div>
                <div className="text-center">
                  <p className="m-1">
                    <strong>Patric Becker</strong>
                  </p>
                </div>
                <div className="text-center">
                  <p className="administrator text-muted">Administrator</p>
                </div>
                <div className="d-flex">
                  <img
                    className="sidedashimg"
                    src="https://cdn-icons-png.flaticon.com/512/4373/4373065.png"
                  ></img>
                  <p className="administrator mx-3">Dashboard</p>
                </div>
                <div className="d-flex">
                  <img
                    className="sidedashimg"
                    src="https://cdn-icons-png.flaticon.com/512/522/522510.png"
                  ></img>
                  <p className="administrator mx-3">Job Pool</p>
                  <img
                    className="sidearrowimg mx-6"
                    src="https://cdn-icons-png.flaticon.com/512/271/271210.png"
                  ></img>
                </div>
                <div>
                  <p className="joblist">Job List</p>
                </div>
                <div>
                  <p className="joblist">Create Job</p>
                </div>
                <div className="d-flex">
                  <img
                    className="sidedashimg"
                    src="https://cdn-icons-png.flaticon.com/512/2/2994.png"
                  ></img>
                  <p className="administrator mx-3">Questionaries</p>
                </div>
                <div className="d-flex">
                  <img
                    className="sidedashimg"
                    src="https://cdn-icons-png.flaticon.com/512/681/681494.png"
                  ></img>
                  <p className="administrator mx-3">Users</p>
                </div>
                <div className="d-flex">
                  <img
                    className="sidedashimg"
                    src="https://cdn-icons-png.flaticon.com/512/1789/1789858.png"
                  ></img>
                  <p className="administrator mx-3">Brands</p>
                </div>
                <div className="d-flex">
                  <img
                    className="sidedashimg"
                    src="https://cdn-icons-png.flaticon.com/512/1170/1170667.png"
                  ></img>
                  <p className="administrator mx-3">Job Reports</p>
                </div>
                <div className="d-flex">
                  <img
                    className="sidedashimg"
                    src="https://cdn-icons-png.flaticon.com/512/4168/4168148.png"
                  ></img>
                  <p className="administrator mx-3">Supervisors</p>
                </div>
                <div className="d-flex">
                  <img
                    className="sidedashimg"
                    src="https://cdn-icons-png.flaticon.com/512/2594/2594116.png"
                  ></img>
                  <p className="administrator mx-3">Sponsers</p>
                </div>
                <div className="d-flex">
                  <img
                    className="sidedashimg"
                    src="https://cdn-icons-png.flaticon.com/512/2099/2099058.png"
                  ></img>
                  <p className="administrator mx-3">Account Settings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-9 mainspace">
          <div className="">
            <div className="card my-4">
              <div className="card-body cardbodytop ">
                <div className="row toprow">
                  <div className="col-sm-6 d-flex">
                    <div className="">
                      <select className="form-select select">
                        <option selected>All</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>

                    <div>
                      <input
                        className="form-control  searchtop"
                        placeholder="Search..."
                      ></input>
                    </div>
                  </div>
                  <div className="col-sm-6 d-flex justify-content-end">
                    <div>
                      <img
                        className="img-fluid topcontimage"
                        src="https://cdn-icons-png.flaticon.com/512/238/238910.png"
                      ></img>
                    </div>
                    <div>
                      <img
                        className="img-fluid topcontimage"
                        src="https://cdn-icons-png.flaticon.com/512/151/151917.png"
                      ></img>
                    </div>
                    <div>
                      <button className="btn createjobbtn">
                        <p className="">+Create Job</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Data />
          <div className="">
            <div className="card my-4 bottomcontainer">
              <div className="card-body bottomcard ">
                <div className="row">
                  <div className="col-sm-3">
                    <p className="bottomfont"> 27 Jobs posted</p>
                  </div>
                  <div className="col-sm-9 d-flex justify-content-end">
                    <div className=" ">
                      <img
                        className="img-fluid bottomarrow"
                        src="https://cdn-icons-png.flaticon.com/512/2985/2985161.png"
                      ></img>
                    </div>
                    <div>
                      <p className="bottomfont">1</p>
                    </div>
                    <div>
                      <p className="bottomfont">2</p>
                    </div>
                    <div>
                      <p className="bottomfont">3</p>
                    </div>
                    <div>
                      <p className="bottomfont">...</p>
                    </div>
                    <div>
                      <p className="bottomfont">12</p>
                    </div>
                    <div className="">
                      <img
                        className="img-fluid bottomarrow"
                        src="https://cdn-icons-png.flaticon.com/512/2952/2952047.png"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="conatiner-fluid footer">
        <div className="card">
          <div className="card-body footerbg">2022 c @ Fireflyze, all rights reserved.</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;