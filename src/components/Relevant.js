import React, { Component } from "react";
import "./Component.css";
import { Container, Col, Row } from 'react-grid-system';

class Relevant extends Component {
  render() {
    return (
        <Container>
        <div className="headline">
        <Row style={{padding: '10px'}}>
                <Col sm={12}>
                <b>Relevant Statistics</b>
    
    <p className='yomama'><span className="headlinemeta">
    <hr className="solid"/>
    <div className="leaderboardchild">42.9% of the world population has received at least one dose of a COVID-19 vaccine.</div>
    <div className="leaderboardchild">Only 1.9% of people in low-income countries have received at least one dose.</div>
    <div className="leaderboardchild">As per the FDA, Vaccine Effectiveness is 95%, and 94.1% after two doses.</div>
    <div className="leaderboardchild">Canada has 26.3M full vaccinated citizens and 54.9M doses given. This equates to 70% of the population to be vaccinated.</div>
    
    
   
    </span></p>
                </Col>
            </Row>
    </div>
    </Container>
    );
  }
}

export default Relevant;