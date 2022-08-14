import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";
import { Row, Col } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiMysql,
  DiHtml5,
  DiCss3Full,
  DiGit,
  DiGithubBadge,
  DiBootstrap,
} from "react-icons/di";

import {
  SiMaterialui,
  SiExpress,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiStyledcomponents,
  SiBootstrap,
  SiRedux,
} from "react-icons/si";

const map = {
  javascript: <DiJavascript1 />,
  react: <DiReact />,
  node: <DiNodejs />,
  mongodb: <DiMongodb />,
  python: <DiPython />,
  sql: <DiMysql />,
  html: <DiHtml5 />,
  css: <DiCss3Full />,
  git: <DiGit />,
  mui: <SiMaterialui />,
  express: <SiExpress />,
  vscode: <SiVisualstudiocode />,
  postman: <SiPostman />,
  heroku: <SiHeroku />,
  styled: <SiStyledcomponents />,
  bootstrap: <SiBootstrap />,
  redux: <SiRedux />,
};

function ProjectCards(props) {
  return (
    <Card className="project-card-view glass project-div">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body style={{ padding: "5px 1rem 1.25rem", height: "fill" }}>
        <Card.Title className="purple">{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Card.Title className="purple" style={{ marginBottom: "10px" }}>
          Tech Stack
        </Card.Title>
        <Row
          style={{
            justifyContent: "center",
            paddingBottom: "10px",
            gap: "5px",
          }}
        >
          {props.stack?.map((s) => (
            <Col
              key={s}
              xs={1}
              md={1}
              className="tech-icons"
              style={{ marginTop: "10px" }}
            >
              <div className="skill glass light">{map[s]}</div>
            </Col>
          ))}
        </Row>
        <Row
          style={{
            justifyContent: "center",
            margin: "auto",
            marginTop: "5px",
            maxWidth: "25rem",
          }}
        >
          <Col sm={6}>
            <Button
              variant="primary"
              style={{
                maxWidth: "10rem",
                cursor: "pointer",
                width: "100%",
                margin: "10px 0px",
              }}
              href={props.demo}
              target="_blank"
            >
              <BiLinkExternal size={20} /> &nbsp; Demo
            </Button>
          </Col>
          <Col sm={6}>
            <Button
              variant="primary"
              style={{
                maxWidth: "10rem",
                cursor: "pointer",
                width: "100%",
                margin: "10px 0px",
              }}
              href={props.link}
              target="_blank"
            >
              <DiGithubBadge size={25} style={{ marginBottom: "1px" }} /> &nbsp;
              View Code
            </Button>
          </Col>
          <Col sm={6}>
            <Button
              variant="primary"
              style={{
                maxWidth: "10rem",
                cursor: "pointer",
                width: "100%",
                margin: "10px 0px",
              }}
              href={props.blog}
              target="_blank"
            >
              <DiBootstrap size={25} style={{ marginBottom: "1px" }} /> &nbsp;
              View blog
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
