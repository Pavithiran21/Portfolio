import React from "react";
import ProgressBar from '@ramonak/react-progress-bar';
import { Container,Row,Col } from "react-bootstrap";

function Skill() {
    return (
        <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col>
              <h1 className="project-heading" style={{ fontSize: "2.6em" }}>
                SKILLS
              </h1>
              
   
              <div className='row'>
                <div className='col-md-6 col-sm-12'>
                    <div className='skillName'>
                        <p>React</p>
                        <ProgressBar 
                            completed={55}
                            bgColor="#01bf71"
                            height="15px"
                            isLabelVisible={true}
                            baseBgColor="#ffffff"
                            labelColor="#ffffff"
                        />
                    </div>
                    <div className='skillName'>
                        <p>Node</p>
                        <ProgressBar 
                            completed={50}
                            bgColor="#01bf71"
                            height="15px"
                            isLabelVisible={true}
                            baseBgColor="#ffffff"
                            labelColor="#ffffff"
                        />
                    </div>
                    <div className='skillName'>
                        <p>Express</p>
                        <ProgressBar 
                            completed={50}
                            bgColor="#01bf71"
                            height="15px"
                            isLabelVisible={true}
                            baseBgColor="#ffffff"
                            labelColor="#ffffff"
                        />
                    </div>
                   
                    <div className='skillName'>
                        <p>JavaScript</p>
                        <ProgressBar 
                            completed={60}
                            bgColor="#01bf71"
                            height="15px"
                            isLabelVisible={true}
                            baseBgColor="#ffffff"
                            labelColor="#ffffff"
                        />
                    </div>
                </div>
                <div className='col-md-6 col-sm-12' data-aos="flip-right">
                    <div className='skillName'>
                        <p>MongoDB</p>
                        <ProgressBar 
                            completed={45}
                            bgColor="#01bf71"
                            height="15px"
                            isLabelVisible={true}
                            baseBgColor="#ffffff"
                            labelColor="#ffffff"
                        />
                    </div>
                    <div className='skillName'>
                        <p>MySql</p>
                        <ProgressBar 
                            completed={50}
                            bgColor="#01bf71"
                            height="15px"
                            isLabelVisible={true}
                            baseBgColor="#ffffff"
                            labelColor="#ffffff"
                        />
                    </div>
                    
                    <div className='skillName'>
                        <p>HTML</p>
                        <ProgressBar 
                            completed={75}
                            bgColor="#01bf71"
                            height="15px"
                            isLabelVisible={true}
                            baseBgColor="#ffffff"
                            labelColor="#ffffff"
                        />
                    </div>
                    <div className='skillName'>
                        <p>CSS</p>
                        <ProgressBar 
                            completed={70}
                            bgColor="#01bf71"
                            height="15px"
                            isLabelVisible={true}
                            baseBgColor="#ffffff"
                            labelColor="#ffffff"
                        />
                    </div>
                </div>
                        
                    
                
            </div>
        
            </Col>
            
            
            
          </Row>
         
         
         
        </Container>
      </Container>
        
    )
}
export default Skill

