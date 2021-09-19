import React from "react";
import { Container, Row, Col } from "react-grid-system";
import Iframe from 'react-iframe';
import "../App.css";
import './pages.css';

export default function Summarize() {
  return (
    <div className="App">

      <Container>
        <header className="App-header">
          <Row>
              <Col sm={12}>
              <Iframe url="https://diplomatica-nlp.herokuapp.com/"
        id="myId"
        className="myClassname"
        position="fixed"/>
              </Col>
          </Row>
        </header>
      </Container>
    </div>
  );
}
