import React, { useState } from "react";
import CustomHeader from "../../component/CustomHeader";
import CustomSidebar from "../CustomSidebar";
import icon_brand from "../../assets/img/icon_brand.png";
import icon_jobs from "../../assets/img/icon_jobs.png";
import icon_questions from "../../assets/img/icon_questions.png";
import icon_reports from "../../assets/img/icon_reports.png";
import icon_sponcers from "../../assets/img/icon_sponcers.png";
import icon_users from "../../assets/img/icon_users.png";
import { Switch, useHistory, useParams, useRouteMatch } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainDashboard from "./MainDashboard";
import Login from "../Login";
import JobPool from "../JobPool";

const Dashboard = () => {
  const [toggle, setToggle] = useState(false);
  const { path, url } = useRouteMatch();

  // const history = useHistory()

  const hadleToggle = () => {
    setToggle(!toggle);
  };
  console.log("sdada",path);
  console.log("url",url)
  return (
    <div className="d-flex">
      <CustomSidebar toggle={toggle} hadleToggle={hadleToggle} />

      <div className="w-100">
        <CustomHeader hadleToggle={hadleToggle} />
        <div className=" mt-5">
          <Switch>
            <Route exact path={`${path}/`}>
              <MainDashboard />
            </Route>
            <Route exact path={`${path}/job-pool`}>
              <JobPool />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;