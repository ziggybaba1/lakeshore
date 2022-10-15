import React, { useEffect } from "react";
import "./course.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Accordion from "../../components/Accordion/Accordion";
import {
  Announcement,
  Assignment,
  Brightness4,
  ChatBubble,
  Close,
  Grade,
  Handshake,
  HandshakeRounded,
  Handyman,
  Home,
  HomeMini,
  Note,
  OpenInNew,
  People,
  Quiz,
  WorkspacePremium,
} from "@mui/icons-material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import course_data_content from "../../Data/course_content_data.json";

const Course = () => {
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="courses_container">
      <Sidebar menu="course" />
      <main className="content_container">
        <section className="top_section">
          <ul>
            <li>
              {" "}
              <Link to={"/"}>
                <Home /> Home
              </Link>
            </li>
            <li>
              <Link to={"/courses"}>Courses</Link>
            </li>
            <li>
              <span>Clinical Laboratory</span>
            </li>
          </ul>
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
        <div className="tab_container">
          <section className="course_tab">
            <ul>
              <li className="active">
                <b>
                  <Home style={{ marginRight: 10 }} /> Home
                </b>
              </li>
              <li>
                <b>
                  <Announcement style={{ marginRight: 10 }} /> Announcement
                </b>{" "}
                <span>2</span>
              </li>
              <li>
                <b>
                  <ChatBubble style={{ marginRight: 10 }} /> Discussion
                </b>
              </li>
              <li>
                <b>
                  <Grade style={{ marginRight: 10 }} /> Grades
                </b>
              </li>
              <li>
                <b>
                  <Note style={{ marginRight: 10 }} /> Modules
                </b>
              </li>
              <li>
                <b>
                  <Quiz style={{ marginRight: 10 }} /> Quizzes
                </b>{" "}
                <span>1</span>
              </li>
              <li>
                <b>
                  <Assignment style={{ marginRight: 10 }} /> Assignment
                </b>{" "}
                <span>2</span>
              </li>
              <li>
                <b>
                  <People style={{ marginRight: 10 }} /> People
                </b>{" "}
                <span>30</span>
              </li>
              <li>
                <b>
                  <WorkspacePremium style={{ marginRight: 10 }} /> Certificate
                </b>{" "}
                <span>1</span>
              </li>
            </ul>
          </section>
          <section className="course_content">
            <div className="head_er">
              <div className="course_description">
                <h3>Course Title: Clinical Laboratory</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam massa tortor, eleifend id tellus eget, convallis ullamcorper risus. Nam nec sagittis eros. Donec vel luctus velit. Ut vulputate eros ut diam pellentesque, vitae iaculis ex rutrum. In nec laoreet purus, eget malesuada libero. Integer non leo mi. Vestibulum</p>
                <button>Read More</button>
              </div>
              <div className="course_description">
                <h3>Instructor Information</h3>
               <img src="https://st2.depositphotos.com/2208684/5796/i/450/depositphotos_57968153-stock-photo-teacher-in-front-of-black.jpg" loading="lazy"  />
               <Link>Saliu Juliet | AWS Certified Cloud Practitioner,Solutions Architect,Developer</Link>
              </div>
            </div>
            <hr />
            <div className="course_body">
            <div className="header_body">
                <h3>Course Content & Progress</h3>
                <p>33 sections • 427 lectures • 4 months</p>
            </div>
            <div className="accordion_container">
            {course_data_content.map((item,index)=>(
                <Accordion key={index} item={item} title={item.title} content={item.section} />
            ))}
            </div>
             
              </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Course;
