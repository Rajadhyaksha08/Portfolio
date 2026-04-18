import React from "react";
import { Col, Row } from "react-bootstrap";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Firebase from "../../Assets/TechIcons/Firebase.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import Html from "../../Assets/TechIcons/HTML5.svg";
import Css from "../../Assets/TechIcons/CSS3.svg";
import C from "../../Assets/TechIcons/C.svg";
import Spring from "../../Assets/TechIcons/Spring.svg";
import Mysql from "../../Assets/TechIcons/MySQL.svg";



function Techstack() {
  return (
    <>
  {/* Frontend */}
  <h3 className="tech-heading">Frontend</h3>
  <Row style={{ justifyContent: "center" }}>
    {[
      { icon: Html, name: "HTML" },
      { icon: Css, name: "CSS" },
      { icon: Javascript, name: "JavaScript" },
      { icon: ReactIcon, name: "React.js" },
    ].map((tech, index) => (
      <Col key={index} xs="auto" className="tech-pill">
        <img src={tech.icon} alt={tech.name} />
        <span>{tech.name}</span>
      </Col>
    ))}
  </Row>

  {/* Backend */}
  <h3 className="tech-heading">Backend</h3>
  <Row style={{ justifyContent: "center" }}>
    {[
      { icon: Node, name: "Node.js" },
      { icon: Spring, name: "Spring Boot" },
    ].map((tech, index) => (
      <Col key={index} xs="auto" className="tech-pill">
        <img src={tech.icon} alt={tech.name} />
        <span>{tech.name}</span>
      </Col>
    ))}
  </Row>

  {/* Database */}
  <h3 className="tech-heading">Database</h3>
  <Row style={{ justifyContent: "center" }}>
    {[
      { icon: Mongo, name: "MongoDB" },
      { icon: Mysql, name: "MySQL" },
    ].map((tech, index) => (
      <Col key={index} xs="auto" className="tech-pill">
        <img src={tech.icon} alt={tech.name} />
        <span>{tech.name}</span>
      </Col>
    ))}
  </Row>

  {/* Programming */}
  <h3 className="tech-heading">Programming & Concepts</h3>
  <Row style={{ justifyContent: "center" }}>
    {[
      { icon: Java, name: "Java" },
      { icon: C, name: "C" },
      { icon: Python, name: "Python" },
    ].map((tech, index) => (
      <Col key={index} xs="auto" className="tech-pill">
        <img src={tech.icon} alt={tech.name} />
        <span>{tech.name}</span>
      </Col>
    ))}
  </Row>

</>

  );
}

export default Techstack;