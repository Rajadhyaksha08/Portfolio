import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Mandar Rajadhyaksha</span>{" "}
            from <span className="purple">Mumbai, India</span>.
            <br />
            I’m an{" "}
            <span className="purple">IT Engineering student</span> with a strong
            foundation in{" "}
            <span className="purple">
              HTML, CSS, JavaScript, React, and Spring Boot
            </span>
            , along with core knowledge of{" "}
            <span className="purple">
              Java, Data Structures & Algorithms, and C
            </span>
            .
            <br />
            I also have hands-on experience using{" "}
            <span className="purple">Git and GitHub</span> for efficient version
            control and collaboration.
            <br />
            <br />
            Currently, I am focused on mastering the{" "}
            <span className="purple">MERN stack</span> while strengthening my
            backend development skills, with an emphasis on building{" "}
            <span className="purple">
              scalable and maintainable applications
            </span>
            .
            <br />
            <br />
            I enjoy transforming ideas into practical solutions through{" "}
            <span className="purple">
              clean code, problem-solving, and thoughtful design
            </span>
            , and I am actively seeking opportunities to contribute and grow as
            a developer.
          </p>
         <ul>
  <li className="about-activity">
    <ImPointRight /> Exploring new technologies 💻
  </li>
  <li className="about-activity">
    <ImPointRight /> Traveling and Exploring New Places 🌍
  </li>
  <li className="about-activity">
    <ImPointRight /> Improving problem-solving skills 🎯
  </li>
</ul>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Mandar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
