import React from "react";
import { Container ,Row,Col} from "react-bootstrap";
import Particle from "../Particle";
import "../../Style.css";



function Contact() {
    return(
        <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
           <strong className="purple"> Contact</strong>   
        </h1>
        <p className='mail-contact mb-5' style={{ color: "white" }}>
          <h4 className='px-2'>Reach out me anytime!!!!</h4>
        </p>
   
        <p  style={{ color: "white" }}>
          <h4>Make a connection through  <span className="purple">Gmail or  Call</span></h4>
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
       
        <div className='mail-contact mb-5'>
                <div className='contacts p-4 text-center'>
                    <i class="fad fa-envelope"></i> <span>pavithiranarthi359@gmail.com</span>
                </div>
                <div className='contacts p-4 text-center'>
                    <i class="fad fa-mobile-alt"></i> <span>9486970967</span>
                </div>
                <div className='contacts p-4 text-center mb-3'>
                <i class="fad fa-map-marker-alt"></i> <span>Sathyamangalam,Erode,TamilNadu</span>
                </div>
        </div>
         
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Pavithiran21"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
             
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/pavithiran-arthi-9a950b172/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>  
            </ul>
          </Col>
        </Row>
        
      </Container>
      
    </Container>
    
        
    
    )

}
export default Contact