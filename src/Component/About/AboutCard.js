import React from 'react';
import Card from "react-bootstrap/Card";



function AboutCard() {
    return(
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{textAlign: "justify"}}>
                        Hi , I am <span className="purple"> R.Pavithiran</span> ,
                          B.E Graduate from
                        <span className="purple"> K.S.R College of Egineering</span> Thiruchengode,Namakkal District and Completed my Graduation in April,2019.
                        <p  className="home-about-description">
                            <h1 style={{ fontSize: "2.6em" }}>
                               About  <span className="purple"> Me </span> 
                            </h1>
                            <p className="home-about-body">
                             I am a <b className="purple text-centre">self-motivated person </b> always seeking challenges to prove myself to become<b className="purple">  stronger</b>  I loved to learn new technology and developing my skills to continue build web applications.
                              A highly motivated and  dynamic person to achieve my career. 
                             I enjoy creating new web application which push me to learn about application and software.
                 
                            </p>
                            <a className='btn btn-sm btn-success mt-3' rel="noreferrer" href="https://drive.google.com/file/d/17XmUSSUVjH3T_YvzO1yAx4vQ6uYpSyQT/view?usp=drivesdk" target="_blank">Download <i class="fad fa-download"></i> </a>              
                        </p>


                        
                    </p>
                    
                    
                </blockquote>
                
            </Card.Body>
        </Card>
    )
}
export default AboutCard