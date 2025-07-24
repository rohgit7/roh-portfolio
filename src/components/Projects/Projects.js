import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/download.jpg";

import editor from "../../Assets/Projects/chat.png";
import chatify from "../../Assets/Projects/farm.jpg";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
             imgPath={chatify}
              isBlog={false}
              title="GrowRight"
              description="GrowRight – Smart Farming Assistant
Designed a web-based platform to help farmers make better crop decisions using soil and weather data. Implemented machine learning models for crop prediction and integrated them with a user-friendly interface for practical use in agriculture."
              ghLink="https://github.com/rohgit7/GrowRight"
              demoLink="https://growright.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="RohChat"
              description="RohChat – Real-Time Chat Application
Built a real-time chat app using Node.js, Express and Socket.io. Enabled instant messaging, user connection tracking, and responsive design for seamless communication between users in a live chatroom environment."
              ghLink="https://github.com/rohgit7/RohChat"
          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="AWS auth system"
              description="Authorization System - AWS
Built a simple AWS-based authentication system using Lambda, DynamoDB, and API Gateway, with a modern frontend for user login and registration.
"
              ghLink="https://github.com/rohgit7/aws-auth"
                   
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Marvel CL-CY"
              description="Marvel CL-CY
Research Report on Computer Networks, Cloud Computing and Cybersecurity. Report
"
              ghLink="https://hub.uvcemarvel.in/work/868e880f-eafe-427a-839a-907b02300481"
                   
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
