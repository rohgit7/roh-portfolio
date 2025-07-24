import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              A passionate Computer Science student from UVCE with a creative edge and strong event leadership experience. Skilled in cloud computing, web development and AI/ML-based project development. Seeking opportunities to contribute to innovative tech teams and grow in real-world problem solving. 🤷‍♂️
             <br />
             <br />
             <b>Education:</b>
             <br />
             <br />
             University Visvesvaraya College of Engineering
              Bachelor of Technology in Computer Science and Engineering;  CGPA: 9.38
            <br />
            <br />
            St.Joseph’s Pre-University College
            PUC (PCMC);  Grade: 98%
            <br />
            <br />
            ITI Central School
            Class 10 (CBSE);  Grade: 95.6%
             
              <br />
              
            </p>
          </Col>
          
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <br />
            <p>Gmail : rohanshalom05@gmail.com</p>
            <p>Ph no: +91 8073226247</p>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/rohgit7"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rohan-shalom-475872311?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
