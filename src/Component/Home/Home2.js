import React from "react";
import { Container,Row,Col } from "react-bootstrap";

import '../../Style.css';


function Home2() {
    return(
        <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                Let me <span className="purple"> introduce </span> myself
              </h1>
              <p className="home-about-body">
                A highly motivated person, dynamic, persevering and rigorous.
                <br />
                <br /> I'm{" "}
                <b className="purple">Web & Mobile Engineering Student </b>
                at ENSIAS, Rabat. My Graduation will be in 2022.
                <br />
                <br />
                I’m also ex-chair and mentor of
                <b className="purple"> IEEE ENSIAS Student Branch</b>, Co-Founder
                and Program Manager of
                <b className="purple"> Morocco IoT & AI Challenge</b>, a capacity
                building and pre-incubation program for students and startups that
                have innovative ideas in the areas of Internet of Things (IoT),
                Artificial Intelligence (AI) and related fields.
                <br />
                <br />
                I'm also a<b className="purple"> content creator </b> on Instagram
                where I mix between my graphic design skills and sharing my coding
                knowledge. 
              </p>
              <a className='btn btn-sm btn-success mt-3' rel="noreferrer" href='https://drive.google.com/file/d/17XmUSSUVjH3T_YvzO1yAx4vQ6uYpSyQT/view?usp=sharing' target="_blank">Download <i class="fad fa-download"></i> </a>              
            </Col>
            
            
            
          </Row>
          
         
        </Container>
      </Container>
    )
}
export default Home2