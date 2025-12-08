import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import billingSystem from "../../Assets/Projects/billingSystem.png";
import Airbnbclone from "../../Assets/Projects/Airbnbclone.png";
import MovieWebsite from "../../Assets/Projects/MovieWebsite.png";

// import chatify from "../../Assets/Projects/chatify.png";

import ochi from "../../Assets/Projects/ochi.png";
import weather from "../../Assets/Projects/weather.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

             <Col md={4} className="project-card">
            <ProjectCard
              imgPath={billingSystem}
              isBlog={false}
              title="billingSystem"
              description="A Billing System is a crucial part of Business transactions, ensuring accurate doucmentation of purchases. It generates invoices or receipts for products or services bought by customers."
              ghLink="https://github.com/BhautikVekariya/ochidesing"
              demoLink="https://biling-machine.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MovieWebsite}
              isBlog={false}
              title="MovieWebsite"
              description="This project is a movie browsing web application built using React.js. It allows users to explore and search for movies, view detailed information such as synopsis, ratings, and release dates, and manage their favorite movie list."
              ghLink="https://github.com/BhautikVekariya/Movieweb"
              demoLink="https://movieweb-react.vercel.app/"
            />
          </Col>
      
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ochi}
              isBlog={false}
              title="ochi clone"
              description="The Ochi UI Clone Tech Stack: ,TailwindCSS, React.js & Framer Motion"
              ghLink="https://github.com/BhautikVekariya/ochidesing"
              demoLink="https://sweet-centaur-b0917d.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="weather app"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/BhautikVekariya/weather-app"
              demoLink="https://enchanting-speculoos-b35bbf.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Airbnbclone}
              isBlog={false}
              title="Airbnbclone"
              description="This project is a modern Airbnb-style web application developed entirely using React.js for the frontend, without using EJS or server-side templating. The platform allows users to explore and book vacation rentals, view property details, and experience an intuitive and responsive interface similar to the original Airbnb platform."
              ghLink="https://github.com/BhautikVekariya/Airlust-website"
              demoLink="https://airlust-website.vercel.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
