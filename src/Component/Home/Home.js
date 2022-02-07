import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import "../../Style.css";
import homeLogo from "../../Asset/Profile.jpg"
import Particle from "../Particle";
//import Home2 from "./Home2";
import Type from "./Type";


function Home() {
    return(
      <Container fluid className="project-section">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={8} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello World!<span className="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> R Pavithiran</strong>
              </h1>

              <div style={{ padding: 45, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
            <Col md={4} className="m-auto">
              <img
                src={homeLogo}
                style={{ width: "100%" }}
                alt="home pic"
                className="d-block mx-auto img-fluid"
              />
            </Col>       
          </Row>
        </Container>
      </Container>
      
    
    )
}
export default Home