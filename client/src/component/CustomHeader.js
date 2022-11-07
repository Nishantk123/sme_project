import React from "react";
import navlogo from "../assets/img/navlogo.png";
import user from "../assets/img/user.png";
// import hmburger from "../assets/img/hmburger.png";
import hmburgur from "../assets/img/hmburgur.png"
const CustomHeader = ({hadleToggle}) => {
  return (
    <nav class="navbar bg-light custom_nav pt-0 pb-0 w-100">
      <div class="container-fluid px-0">
        <a class="navbar  pt-0 pb-0">
          <div className="buger-menu-container">
            <img src={hmburgur}  onClick={hadleToggle} className="cursor_pointer"/>
          </div>
          <img src={navlogo} />
        </a>
        <form class="d-flex" role="search">
          <div className="user-header-container">
            <img src={user} />
            <span>Patrik Becker</span>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default CustomHeader;
