import React, { Component } from "react";
import "./Component.css";
import { Container, Col, Row } from 'react-grid-system';

class Relevant3 extends Component {
  render() {
    return (
        <Container>
        <div className="headline">
        <Row style={{padding: '10px'}}>
                <Col sm={12}>
                <b>What You Need To Know</b>
    
    <p className='yomama'><span className="headlinemeta">
    <hr className="solid"/>
    <div className="leaderboardchild">Cancel culture or call-out culture is a modern form of ostracism in which someone is thrust out of social or professional circles – whether it be online, on social media, or in person. Those subject to this ostracism are said to have been "cancelled"</div>
    <div className="leaderboardchild">Canceling prevents any exchange of opinions or investigation of the truth, even when that would be appropriate or necessary. Cancel culture is undeniably toxic when it involves criminal threats, invasion of privacy (doxing), or driving a person to suicide.</div>
    <div className="leaderboardchild">Cancel culture — the phenomenon of promoting the “canceling” of people, brands and even shows and movies due to what some consider to be offensive or problematic remarks or ideologies — isn’t all that new.</div>
    <div className="leaderboardchild">Common Examples: Mike Richards of Jeopardy, Joe Rogan on his podcast, Disney's Movie Dumbo, Dr. Suess</div>
    
    
   
    </span></p>
                </Col>
            </Row>
    </div>
    </Container>
    );
  }
}

export default Relevant3;