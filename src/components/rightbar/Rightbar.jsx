import {
    Assignment,
  MoreHoriz,
  Notifications,
  NotificationsNone,
  Settings,
} from "@mui/icons-material";
import React from "react";
import "./righbar.scss";
import todo_data from "../../Data/todo_data.json";
import moment from "moment";

function Rightbar(props) {
  return (
    <div className="rightbar_section">
      <div className="topMenu">
        <a>
          <Settings fontSize="large" />{" "}
        </a>
        <a>
          <Notifications fontSize="large" />{" "}
        </a>
        <a>
          <img src="./icons/avatar.png" loading="lazy" />
        </a>
      </div>
      <div className="section_container">
        <div className="header">
          <h3>Todo List</h3>
          <MoreHoriz fontSize="large" />
        </div>
        {todo_data.map((item, index) => (
          <div className="item">
            {item.type === "event" && (
              <div className="iconContainer">
                <NotificationsNone />
              </div>
            )}
            {item.type === "assignment" && (
              <div style={{color:'#fff',backgroundColor:'#123283'}} className="iconContainer">
                <Assignment />
              </div>
            )}
            {item.type === "discussion" && (
              <div style={{color:'#fff',backgroundColor:'#EA4335'}} className="iconContainer">
                <Assignment />
              </div>
            )}
            <div className="labelContainer">
              <h3>{item.title}</h3>
              <div className="bottom">
                <span>{moment(item.date+' '+item.time).format("LLLL")}</span>
                {/* <span>09:20 AM</span> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="section_container">
        <div className="header">
          <h3>Recent Activity</h3>
          <MoreHoriz fontSize="large" />
        </div>
        {todo_data.map((item, index) => (
          <div className="item">
            {item.type === "event" && (
              <div className="iconContainer">
                <NotificationsNone />
              </div>
            )}
            {item.type === "assignment" && (
              <div style={{color:'#fff',backgroundColor:'#123283'}} className="iconContainer">
                <Assignment />
              </div>
            )}
            {item.type === "discussion" && (
              <div style={{color:'#fff',backgroundColor:'#EA4335'}} className="iconContainer">
                <Assignment />
              </div>
            )}
            <div className="labelContainer">
              <h3>{item.title}</h3>
              <div className="bottom">
              <span>{moment(item.date+' '+item.time).format("LLLL")}</span>
                {/* <span>09:20 AM</span> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rightbar;
