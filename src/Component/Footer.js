import React from 'react';
import "../Style.css";
import { Container } from 'react-bootstrap';


function Footer() {
    return (
      <Container fluid className="footer-container">
        <div style={{ color: "white" }}>R.PAVITHIRAN</div>

        <div className='footer-bottom'>
          <a href="https://github.com/Pavithiran21">
              <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/pavithiran-arthi-9a950b172/">
            <i className="fab fa-linkedin-in"></i>
          </a>

        </div>
        
    
      
      </Container>
    );
  }
  
  export default Footer;