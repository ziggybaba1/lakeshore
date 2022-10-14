import React, { useEffect } from "react";
import "./courses.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import {
  Brightness4,
  Close,
  Handshake,
  HandshakeRounded,
  Handyman,
} from "@mui/icons-material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import ReactPlayer from "react-player";
import { ResponsiveBar } from "@nivo/bar";
import { ResponsivePie } from "@nivo/pie";
import data_bar from "../../Data/bar_data.json";
import data_pie from "../../Data/pie_chart.json";
import course_data from "../../Data/course_data.json";
import Rightbar from "../../components/rightbar/Rightbar";

const Courses = () => {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: "white",
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#545be8" : "#545be8",
    },
  }));

  useEffect(()=>{
    window.scrollTo(0, 0);
},[])
  return (
    <div className="course_container">
      <Topbar />
      <Sidebar menu="course" />
      <main className="content_container">
        <section className="top_section">
          <span>
            REGISTERED COURSES
           
          </span>
         
        </section>
        {/* <section className="advert_section">
          <div className="top_header">
            <h3>Community health sensitisation</h3>
          </div>
          <div className="top_body">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam massa
              tortor, eleifend id tellus eget, convallis ullamcorper risus. Nam
              nec sagittis eros. Donec vel luctus velit. Ut vulputate eros ut
              diam pellentesque, vitae iaculis ex rutrum. In nec laoreet purus,
              eget malesuada libero. Integer non leo mi. Vestibulum
            </span>
            <a>Get Started</a>
          </div>
        </section> */}
       
        <section className="course_sectioner">
          <div className="top_header">
            <h3>Active Courses</h3>
          </div>
          <div className="course_container">
            {course_data.map((item, index) => (
              <div className="item_course">
                <img src={item.image} loading="lazy" />
                <div className="bottom_label">
                  <span>{item.title}</span>
                  <div className="progressContainer">
                    <BorderLinearProgress variant="determinate" value={item.progress} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Rightbar />
    </div>
  );
};

export default Courses;
