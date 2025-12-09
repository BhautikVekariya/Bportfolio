import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am passionate about python full-stack developer and truly enjoy turning ideas into
              real, functional web applications. Every project I work on helps me learn and
              grow as a developer. 
              <br />
              <br />
              I am skilled in both frontend and backend technologies such as
              <i>
                <b className="purple"> Python, Django, JavaScript, React.js, HTML, CSS, Bootstrap, and Tailwind CSS </b>
              </i>
              <br />
              <br />
              My areas of interest include building
              <i>
                <b className="purple"> modern Web Applications, APIs, and full-stack products</b>
              </i>
              &nbsp;that are scalable, responsive, and user-friendly.
              <br />
              <br />
              I also enjoy working with backend technologies like
              <b className="purple"> Django and Node.js</b>, and I love developing applications using
              <i>
                <b className="purple"> modern JavaScript libraries and frameworks </b>
              </i>
              such as
              <i>
                <b className="purple"> React.js</b>
              </i>
               &nbsp; to create smooth and interactive user experiences.
            </p>

          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">

              {/* GitHub */}
              <li className="social-icons">
                <a
                  href="https://github.com/Bhautikvekariya"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              {/* Email */}
              <li className="social-icons">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=vekariaybhavtik3209@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>

              {/* LinkedIn */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/bhautik-vekariya-ab8250245/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              {/* PhoneNumber */}
              <li className="social-icons">
                <a
                  href="tel:+919876543210"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlinePhone />
                </a>
              </li>

            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
