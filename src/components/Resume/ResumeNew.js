import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// ✅ FIX 1: Add .pdf extension
import pdf from "../../Assets/Resume_Mandar_Rajadhyaksha.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {/* 🔥 Heading */}
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          My <strong className="purple">Resume</strong>
        </h1>

        {/* 📄 PDF Preview */}
        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page
              pageNumber={1}
              scale={width > 768 ? 1.6 : 0.6}  // ✅ same size maintained
            />
          </Document>
        </Row>

        {/* 🔽 ONLY BOTTOM BUTTON (FIXED) */}
        <Row style={{ justifyContent: "center", marginTop: "30px" }}>
          <a
            href={pdf}
            download="Mandar_Rajadhyaksha_Resume.pdf"
            className="btn btn-primary resume-btn"
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </a>
        </Row>

      </Container>
    </div>
  );
}

export default ResumeNew;