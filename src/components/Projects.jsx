import React from "react";
import project1 from "../assets/runwayscshot.png";
import { Card } from "react-bootstrap";
export const Projects = () => {
  return (
    <>
      <div className="container">
        <div className="global-header">
          <h1>Projects</h1>
        </div>
        <div className="d-flex">
          <Card style={{ width: "20rem", marginLeft: "5rem" }}>
            <Card.Body>
              <Card.Title>Runway Fashion</Card.Title>
              <Card className="">
                <img src={project1} alt="" />
              </Card>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
          <Card style={{ width: "20rem", marginLeft: "5rem" }}>
            <Card.Body>
              <Card.Title>Runway Fashion</Card.Title>
              <Card className="">
                <img src={project1} alt="" />
              </Card>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
          <Card style={{ width: "20rem", marginLeft: "5rem" }}>
            <Card.Body>
              <Card.Title>Runway Fashion</Card.Title>
              <Card className="">
                <img src={project1} alt="" />
              </Card>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};
