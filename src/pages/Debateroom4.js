import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { Link } from 'react-router-dom';
import Relevant4 from '../components/Relevant4';
import "../App.css";
import './pages.css';

export default function Debateroom3() {
  return (
    <div className="App">

      <Container>
        <header className="App-header">
          <Row>
              <Col sm={12}>
              <br/><h2 className="dashhead">Start a Discussion</h2>
              <p>Interested in debating a different topic? Start one in the general discussion channel!</p>
              </Col>

          </Row>
<br/>
          <Row>
            <Col sm={6} className="">
            <iframe title="chatapp" src="https://room4.rajnagrwl.repl.co" width="100%" height="500px" frameBorder="0" className="debatebackground"/>
            <p><Link to="/waitingroom"><span role="img" aria-label="emoji">👈</span> Exit Discussion</Link></p>
            </Col>
            <Col sm={6} className="">
            <Relevant4/>
            </Col>
            
          </Row>
          <Row>
            
          </Row>
        </header>
      </Container>
    </div>
  );
}
