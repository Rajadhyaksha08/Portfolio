import React from "react";
import { Col, Row } from "react-bootstrap";
import git from "../../Assets/TechIcons/Git.svg";
import github from "../../Assets/TechIcons/GitHub.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import intelliJ from "../../Assets/TechIcons/intellij-idea.svg";
import firebase from "../../Assets/TechIcons/Firebase.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "40px" }}>
      
      <Col xs="auto" className="tech-pill">
        <img src={git} alt="Git" />
        <span>Git</span>
      </Col>

      <Col xs="auto" className="tech-pill">
        <img src={github} alt="GitHub" />
        <span>GitHub</span>
      </Col>

      <Col xs="auto" className="tech-pill">
        <img src={vsCode} alt="VS Code" />
        <span>VS Code</span>
      </Col>

      <Col xs="auto" className="tech-pill">
        <img src={intelliJ} alt="IntelliJ" />
        <span>IntelliJ</span>
      </Col>

      <Col xs="auto" className="tech-pill">
        <img src={firebase} alt="Firebase" />
        <span>Firebase</span>
      </Col>

    </Row>
  );
}

export default Toolstack;