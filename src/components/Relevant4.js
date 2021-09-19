import React, { Component } from "react";
import "./Component.css";
import { Container, Col, Row } from 'react-grid-system';

class Relevant4 extends Component {
  render() {
    return (
        <Container>
        <div className="headline">
        <Row style={{padding: '10px'}}>
                <Col sm={12}>
                <b>A Few Topics You Could Bring Up!</b>
    
    <p className='yomama'><span className="headlinemeta">
    <hr className="solid"/>
    <div className="leaderboardchild">Why Hackathons Are So Awesome</div>
    <div className="leaderboardchild">The Afghanistan Takover by the Taliban</div>
    <div className="leaderboardchild">Teetering property developer Evergrande sparks contagion fears for China's economy</div>
    <div className="leaderboardchild">Trudeau open to electoral reform, says he is a fan of ranked ballots</div>
    <div className="leaderboardchild">China Introduces 3 Hour Per Week Video Game Ban</div>
    <div className="leaderboardchild">The Art of Music</div>
    
    
   
    </span></p>
                </Col>
            </Row>
    </div>
    </Container>
    );
  }
}

export default Relevant4;