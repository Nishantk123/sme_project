import React from "react";

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar">
        <div className="container-fluid header1">
          <div className="row w-100">
            <div className="col-sm-7 d-flex">
              <a className="navbar-brand" href="#">
                Fireflyze
              </a>
              <div>
                <input
                  className="form-control searchinput "
                  placeholder="Search..."
                ></input>
              </div>
            </div>
            <div className="col-sm-5 ">
              <div className="d-flex justify-content-end">
                <div>
                  <img
                    className="navmaxicon"
                    src="https://img.icons8.com/external-others-inmotus-design/344/external-Maximum-Size-max-and-min-others-inmotus-design-4.png"
                  ></img>
                </div>
                <div>
                  <img
                    className="navbellicon"
                    src="https://cdn-icons-png.flaticon.com/512/8338/8338827.png"
                  ></img>
                </div>
                <div>
                  <img
                    className="profileicon"
                    src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png"
                  ></img>
                </div>
                <div className="buttonheader">
                  <div className="btn-group">
                    <button className="btn topbtn btn-secondary btn-sm" type="button">
                      Patrik
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-secondary topbtn dropdown-toggle dropdown-toggle-split"
                      data-bs-toggle="dropdown"
                      // aria-expanded="false"
                    >
                      <span className="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul className="dropdown-menu">...</ul>
                  </div>
                </div>
                <div>
                  <img
                    className="navsettingsicon"
                    src="https://cdn-icons-png.flaticon.com/512/3845/3845826.png"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <nav className="navbar2 ">
        <div className="container-fluid header2">
          <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-1 my-1 ">
              {" "}
              <p className="header2content colorwhite ">
                <strong className="">JOB POOL</strong>
              </p>
            </div>

            <div className="col-sm-8 text-end colorwhite ">
              DASHBOARD / JOB POOL
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;