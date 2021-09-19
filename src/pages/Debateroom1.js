import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { Link } from 'react-router-dom';
import Relevant from '../components/Relevant';
import "../App.css";
import './pages.css';

export default function Debateroom1() {
  return (
    <div className="App">

      <Container>
        <header className="App-header">
          <Row>
              <Col sm={12}>
              <br/><h2 className="dashhead">A Discussion about Vaccines</h2>
              <p>Recent Canadian Law will now mandate the ownership of a digital vaccine passport for usage in small businesses, large areas and the vast moajority of enterprises. Some say that this initiative has been postponed, others disagree with the motion as a whole. What do you think?</p>
              </Col>


          </Row>
<br/>
          <Row>
            <Col sm={6} className="">
            <iframe title="chatapp" src="https://yep.rajnagrwl.repl.co/" width="100%" height="500px" frameBorder="0"/>
            <p><Link to="/waitingroom"><span role="img" aria-label="emoji">👈</span> Exit Discussion</Link></p>
            </Col>
            <Col sm={6} className="">
            <Relevant/>
            </Col>
            
          </Row>
          <Row>

            
          </Row>
        </header>
      </Container>
    </div>
  );
}
