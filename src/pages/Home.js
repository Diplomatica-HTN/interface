import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { Link } from 'react-router-dom'
import "../App.css";
import './pages.css';


export default function Home() {
  return (
    <div className="App getready">

      <Container>
        <header className="App-header">
          <Row>
          <Col sm={12} className="landingheader">
            <br/>
            <h2 className="explorehead">We are Diplomatica</h2>
            <p className="center">A Well-Informed Electorate Is a Prerequisite for Democracy</p>
            
          </Col>
          </Row>
          <Row>
            <Col sm={2}></Col>
            <Col sm={8} className="">
            <Row>
              
            </Row>
              <h5 className="manifesto linkheader">Here's The Deal.</h5>
              <p className="p-manifesto">
              Articles are long, politics are boring, social issues are too large to handle and ranting to friends leads to nowhere–and if you are able to find solutions, they’re all on different applications. <br/><br/>In our global politics class, we had a discussion about the Federal Election and the rise in propaganda in a digital-first world. So, for our hack, we wanted to clear the mist by alleviating false and opinionated facts through a gamified system. Introducing, Diplomatica.<br/><br/>

              <h5 className="manifesto linkheader">The Platform</h5><br/>We are building a world of political scientists by gamifying political and social awareness. At the moment, it’s virtually impossible to find out what’s right and what’s wrong about a certain event, such as currently, Afghanistan’s events. But that’s what Diplomatica is for, bringing the truth to everyone. <br/><br/>

The platform is broken down into three parts. Scraping relevant and desired articles, summarizing them with our AI models, and a decentralized debate platform to spark thought-provoking conversations and to compete with your friends using our points system.


              </p>
            </Col>
            <Col sm={2}></Col>
          </Row>
          <Row>
              <Col sm={2}>
              </Col>
              <Col sm={3}>
              <p><Link to="/"><span role="img" aria-label="emoji"></span><span role="img" aria-label="emoji"></span></Link></p>
              </Col>
              <Col sm={3}></Col>
              <Col sm={4}>
              <p><Link to="/onboarding"><span role="img" aria-label="emoji"></span> Onboarding <span role="img" aria-label="emoji">👉</span></Link></p>
              </Col>
              <Col sm={2}></Col>
          </Row>
        </header>
      </Container>
    </div>
  );
}
