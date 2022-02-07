import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import Particle from "../Particle";
import "../../Style.css";
import URL from "../../Asset/Project/URL.png";
import Forgot from "../../Asset/Project/Forgot.png";
import Zoom from "../../Asset/Project/zoom.png";
import Spotify from "../../Asset/Project/spotify.png";
import Skill from "./Skill";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Coding <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are the projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Forgot}
              title="Forgot Password"
              description="A Password Reset flow that allows authentication verify the user by assigning the Token value,and reset password .Depencies are Reactjs,ExpressJS,Nodemailer,JsonWedtoken etc.. In  additional for Mailtrap are used."
              frontend="https://github.com/Pavithiran21/Rest-Client"
              backend="https://github.com/Pavithiran21/Rest-server"
              server="https://forgetpasswords.netlify.app/#/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={URL}
              title="URL Shortner"
              description="URL Shortner which contains  any long url are shortnen and the short url run directly run to the old link which are long to store and remember. Dependices,Reactjs,Nodemailer,Expressjs, Short-url are used."
              frontend="https://github.com/Pavithiran21/URL-client"
              backend ="https://github.com/Pavithiran21/URL-Server"
              server="https://shortnerapp.netlify.app/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Spotify}
              title="Spotify Clone"
              description="Spotify Clone  which contains playlist which can be added your own music.Dependencies which are Spotify API is only used to addd and search the musics."
              frontend ="https://github.com/Pavithiran21/spotify"
              backend = "https://github.com/Pavithiran21/spotify"
              server="pavithiran21.github.io/spotify/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Zoom}
              title="Zoom-clone App"
              description= "Zoom Clone App which is Zoom clone demo code.In this project,EJS,Peer and Socket.io are used.In this application one-to-one peer server are run and developed.In this application Demo code are used to check where they are running in video calling app."
              frontend ="https://github.com/Pavithiran21/zoom"
              backend = "https://github.com/Pavithiran21/zoom"
              server="https://dashboard.heroku.com/apps/zv-app"
            />
          </Col>

          
        </Row>
        
      </Container>
      <Skill/>
    </Container>
    
  );
}

export default Projects;