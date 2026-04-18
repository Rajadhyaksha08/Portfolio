import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

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
              I am an aspiring{" "}
              <b className="purple">Full-Stack Developer</b> who enjoys building
              modern and user-friendly web applications.
              <br />
              <br />
              I primarily work with{" "}
              <i>
                <b className="purple">
                  JavaScript, React, Spring Boot, and MySQL
                </b>
              </i>{" "}
              and have a strong interest in developing clean and efficient
              solutions.
              <br />
              <br />
              Currently, I am exploring{" "}
              <b className="purple">MERN stack development</b> and continuously
              improving my understanding of both frontend and backend
              technologies.
              <br />
              <br />
              I enjoy learning new technologies, solving problems, and turning
              ideas into practical applications that create real value.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;