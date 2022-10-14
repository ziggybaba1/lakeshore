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
          <img src="./Logo.png" loading="lazy" />
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
          <Dashboard fontSize="large" />
          <span>Dashboard</span>
        </Link>
        <Link
          to={"/courses"}
          className={`${
            props.menu === "course" ? "menuList active" : "menuList"
          }`}
        >
          <BookTwoTone fontSize="large" />
          <span>Courses</span>
        </Link>
        <div className="menuList">
          <CalendarMonth fontSize="large" />
          <span>Calendar</span>
        </div>
        <div className="menuList">
          <MailOutline fontSize="large" />
          <span>Inbox</span>
        </div>
        <div className="menuList">
          <AccountCircle fontSize="large" />
          <span>Account</span>
        </div>
      </div>
      <aside id="sidebar_nav" className="sidebar_nav">
        <div className="logoContainer">
          <img src="./Logo.png" loading="lazy" />
          <span>Health Practitioner</span>
        </div>
        <div className="lineDiv" />
        <div className="menuContainer">
          <li className={`${props.menu === "home" ? "active" : ""}`}>
            {props.menu === "home" && <div className="activeLine"></div>}
            {props.menu !== "home" && <div className="Line"></div>}
            <Link to={"/"} className="itemList">
              <Dashboard fontSize="large" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li className={`${props.menu === "course" ? "active" : ""}`}>
            {props.menu === "course" && <div className="activeLine"></div>}
            {props.menu !== "course" && <div className="Line"></div>}
            <Link to={"/courses"} className="itemList">
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
