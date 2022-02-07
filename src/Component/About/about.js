import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import '../../Style.css';
import AboutCard from "./AboutCard";
import Particle from "../Particle";
import laptopImg from "../../Asset/about.svg";



function About() {
    return(
        <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">AM I?</strong>
            </h1>
            <AboutCard/>
          </Col>
          <Col  style={{ paddingTop: "120px", paddingBottom: "50px" }}className="about-img">
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
          
          
          
            
            
           
        </Row>
        
      
      </Container>
    </Container>
  );
}
export default About

