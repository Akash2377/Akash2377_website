import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
} from "react-icons/si";

import {
  DiGit
} from "react-icons/di";


const toolStacks = [
  {
    icon: <SiVisualstudiocode />,
    label: "VS Code"
  },
  {
    icon: <DiGit />,
    label: "Git"
  },
  {
    icon: <SiPostman />,
    label: "Postman"
  },
  {
    icon: <SiHeroku />,
    label: "Heroku"
  }

];

function Toolstack() {
  return (
    <>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {
          toolStacks.map(stack => (
            <Col key={stack.label} xs={4} md={2} className="tech-icons">
              <div className="skill glass light">
                {stack.icon}
                <p>{stack.label}</p>
              </div>
            </Col>
          ))
        }
      </Row>
    </>
  );
}

export default Toolstack;
