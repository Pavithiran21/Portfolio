import React from "react";
import Card from "react-bootstrap/Card";

import "../../Style.css";


function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <p className='codeLinks text-center pt-3'>
          <a className='bth btn-sm btn-success ml-3' target='_blank' rel="noreferrer" href={props.frontend}>Frontend <i class="fab fa-github"></i></a>
          <a className='bth btn-sm btn-success ml-3' target='_blank' rel="noreferrer" href={props.backend}>Backend <i class="fab fa-github"></i></a>
          <a className='bth btn-sm btn-success ml-3' target='_blank' rel="noreferrer" href={props.server}>Website <i class="fad fa-link"></i></a>
        </p>
        
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;