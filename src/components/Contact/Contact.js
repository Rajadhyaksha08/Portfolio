import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";

function Contact() {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_1971",     
        "template_d1n2bpo",    
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        "sb7yNvEsTWYlWnfSq"      
      )
      .then(
        () => {
          alert("Message Sent Successfully!");

          // ✅ Reset form
          setData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          alert("Failed to send message. Try again.");
          console.error(error);
        }
      );
  };

  return (
    <Container fluid className="contact-section">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} className="contact-card">
            
            <h1 className="contact-heading">
              Get In <span className="purple">Touch</span>
            </h1>

            <p className="contact-subtext">
              Have a project, opportunity, or question? Let’s connect.
            </p>

            <Form onSubmit={handleSubmit}>
              
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  value={data.name}                // ✅ IMPORTANT
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  value={data.email}              // ✅ IMPORTANT
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Your Message"
                  name="message"
                  value={data.message}            // ✅ IMPORTANT
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <div className="text-center">
                <Button type="submit" className="send-btn">
                  Send Message
                </Button>
              </div>

            </Form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;