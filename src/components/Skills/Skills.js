import React from "react";
import { Container } from "react-bootstrap";
import Github from "./Github";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

function Skills() {
  return (
    <Container id="skills" fluid className="about-section second-color">
      <h1 className="project-heading">
        Professional <strong className="purple">Skillset </strong>
      </h1>

      <Techstack />

      <h1 className="project-heading">
        <strong className="purple">
          Tools
        </strong>{" "}
        I use
      </h1>
      <Toolstack />

      <Github />
    </Container>
  );
}

export default Skills;
