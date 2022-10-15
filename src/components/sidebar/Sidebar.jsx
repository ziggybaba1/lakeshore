import React from "react";
import "./sidebar.scss";
import {
  AccountCircle,
  BookTwoTone,
  CalendarMonth,
  CalendarViewDay,
  CalendarViewMonth,
  Dashboard,
  HelpCenter,
  HistoryToggleOff,
  MailOutline,
  Menu,
  MoreVert,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

function Sidebar(props) {
  return (
    <div className="sideMenu">
      <div className="logoContainer">
        <div className="logo">
          <img src="/Logo.png" loading="lazy" />
          <span>Health Practitioner</span>
        </div>
        <button>
          <MoreVert fontSize="large" />
        </button>
      </div>
      <div className="footer_nav">
        <Link
          to={"/"}
          className={`${
            props.menu === "home" ? "menuList active" : "menuList"
          }`}
        >
          <Dashboard style={{marginTop:5}} fontSize="large" />
          <span>Dashboard</span>
        </Link>
        <Link
          to={"/courses"}
          className={`${
            props.menu === "course" ? "menuList active" : "menuList"
          }`}
        >
          <BookTwoTone style={{marginTop:5}} fontSize="large" />
          <span>Courses</span>
        </Link>
        <div className="menuList">
          <CalendarMonth style={{marginTop:5}} fontSize="large" />
          <span>Calendar</span>
        </div>
        <div className="menuList">
          <MailOutline style={{marginTop:5}} fontSize="large" />
          <span>Inbox</span>
        </div>
        <div className="menuList">
          <AccountCircle style={{marginTop:5}} fontSize="large" />
          <span>Account</span>
        </div>
      </div>
      <aside id="sidebar_nav" className="sidebar_nav">
        <div className="logoContainer">
          <img src="/Logo.png" loading="lazy" />
          <span>Health Practitioner</span>
        </div>
        <div className="lineDiv" />
        <div className="menuContainer">
          <li className={`${props.menu === "home" ? "active" : ""}`}>
            <Link to={"/"} className={`${props.menu === "home" ? "itemList active" : "itemList"}`}>
              <Dashboard fontSize="large" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li className={`${props.menu === "course" ? "active" : ""}`}>
            <Link to={"/courses"} className={`${props.menu === "course" ? "itemList active" : "itemList"}`}>
              <BookTwoTone fontSize="large" />
              <span>Courses</span>
            </Link>
          </li>
          <li>
            <div className="Line"></div>
            <a className="itemList">
              <CalendarMonth fontSize="large" />
              <span>Calendar</span>
            </a>
          </li>
          <li>
            <div className="Line"></div>
            <a className="itemList">
              <MailOutline fontSize="large" />
              <span>Inbox</span>
            </a>
          </li>
          <li>
            <div className="Line"></div>
            <a className="itemList">
              <HelpCenter fontSize="large" />
              <span>Help</span>
            </a>
          </li>
          <li>
            <div className="Line"></div>
            <a className="itemList">
              <HistoryToggleOff fontSize="large" />
              <span>History</span>
            </a>
          </li>
          <li>
            <div className="Line"></div>
            <a className="itemList">
              <AccountCircle fontSize="large" />
              <span>Account</span>
            </a>
          </li>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
