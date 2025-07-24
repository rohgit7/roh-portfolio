import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">R Rohan Shalom </span>
            from <span className="purple"> Bangalore, India.</span>
            <br />
            I am a student at UVCE pursuing my B.Tech in Computer Science.
            <br />
            I am a passionate developer who loves to explore new technologies and build projects that can make a difference.
            <br />
          
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
