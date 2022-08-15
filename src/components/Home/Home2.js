import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/014.png";

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
              I love problem solving and programing
              <br />
              <br />I am fluent in languages like
              <i>
                <b className="purple"> Javascript and Java. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies, Products </b> and in{" "}
                <b className="purple">Data Structures and Algorithms.</b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <img
              src={myImg}
              style={{
                marginTop: "-60px",
                height: "415px",
                borderRadius: "5%",
                width: "337px",
              }}
              className="img-fluid"
              alt="avatar"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
