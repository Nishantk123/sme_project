import React from "react";
import Data from "./Data";

const Maincontent = (data) => {
        
  return (
    <div className="col-sm-4 my-3">
      <div className="card cardheight">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-4 ">
              <div className="d-flex">
                <div className="activecolor"></div>
                <div>
                  <p className="new">NEW</p>
                </div>
              </div>
              <div className="">
                <img
                  className="img-fluid cardlogo"
                  src={data.data.logo}
                ></img>
              </div>
            </div>
            <div className="col-sm-8">
              <div className="d-flex justify-content-end">
                <img
                  className="img-fluid topediticon "
                  src="https://cdn-icons-png.flaticon.com/512/1827/1827951.png"
                ></img>
              </div>
              <div>
                <p className="demographic">
                {data.data.title}
                </p>
              </div>
              <div>
                <p className="published">{data.data.publisheddate}</p>
              </div>
              <div className="d-flex ">
                <img
                  className="img-fluid topediticon my-1"
                  src="https://cdn-icons-png.flaticon.com/512/535/535188.png"
                ></img>
                <p className="location my-1 mx-1">{data.data.location}</p>
              </div>
              <div className="d-flex ">
                <img
                  className="img-fluid topediticon my-1"
                  src="https://cdn-icons-png.flaticon.com/512/747/747310.png"
                ></img>
                <p className="location my-1 mx-1">{data.data.date}</p>
              </div>
              <div className="d-flex ">
                <img
                  className="img-fluid topediticon my-1"
                  src="https://cdn-icons-png.flaticon.com/512/569/569800.png"
                ></img>
                <p className="location my-1 mx-1">{data.data.sample}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer cardfooter d-flex justify-content-between">
          <div>
            <p className="cardfooterdata">$6000.00</p>
          </div>
          <div className="d-flex">
            <img
              className="img-fluid cardimage"
              src="https://cdn-icons-png.flaticon.com/512/1694/1694262.png"
            ></img>
            <div>
              <p className="cardfooterdata mx-2">500</p>
            </div>
          </div>
          <div>
            <p className="cardfooterdata">APPLY</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maincontent;