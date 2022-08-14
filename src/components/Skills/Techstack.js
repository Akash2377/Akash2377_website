import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiJava,
  DiMysql,
  DiHtml5,
  DiCss3Full,
} from "react-icons/di";

import { SiMaterialui, SiExpress } from "react-icons/si";

const frontendStacks = [
  {
    icon: <DiJavascript1 />,
    label: "JavaScript",
  },
  {
    icon: <DiReact />,
    label: "React",
  },
  {
    icon: <SiMaterialui />,
    label: "Material UI",
  },
  {
    icon: <DiHtml5 />,
    label: "HTML",
  },
  {
    icon: <DiCss3Full />,
    label: "CSS",
  },
];

const backendStacks = [
  {
    icon: <DiNodejs />,
    label: "Node",
  },
  {
    icon: <SiExpress />,
    label: "Express",
  },
  {
    icon: <DiMongodb />,
    label: "MongoDB",
  },
  {
    icon: <DiMysql />,
    label: "SQL",
  },
  {
    icon: <DiJava />,
    label: "Java",
  },
];

function Techstack() {
  return (
    <>
      <h1 className="project-heading">Frontend</h1>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {frontendStacks.map((stack) => (
          <Col key={stack.label} xs={4} md={2} className="tech-icons">
            <div className="skill glass light">
              {stack.icon}
              <p>{stack.label}</p>
            </div>
          </Col>
        ))}
      </Row>

      <h1 className="project-heading">Backend</h1>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {backendStacks.map((stack) => (
          <Col key={stack.label} xs={4} md={2} className="tech-icons">
            <div className="skill glass light">
              {stack.icon}
              <p>{stack.label}</p>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Techstack;
