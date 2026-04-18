import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// 👉 Add your project image here
import vbs from "../../Assets/Projects/1.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>

        <p style={{ color: "white" }}>
          Here is a project I have worked on.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vbs}
              isBlog={false}
              title="Virtual Banking System (VBS)"
              description="A full-stack web application that simulates core banking operations such as account management, deposits, withdrawals, and transaction tracking. Built using Java (Spring Boot), MySQL, and a responsive frontend, the system focuses on secure and efficient handling of user data with a clean and user-friendly interface."
              
              ghLink="https://github.com/Rajadhyaksha08/VBS2"
              
              // demoLink="" // add later if deployed
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;