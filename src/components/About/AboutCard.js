import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote pb-5">
          <p style={{ textAlign: "justify", fontSize: "1.5rem" }}>
            Hi Everyone, I am <span className="purple">Akash Surve </span>
            from <span className="purple"> Pune, India.</span>
            <br />I am an aspiring full stack developer and I have completed
            B.E. in Mechanical from Savitribai Phule Pune University
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Solving Rubics cube
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Cricket
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
