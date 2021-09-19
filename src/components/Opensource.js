import React, { Component } from "react";
import "./Component.css";
import { Container, Col, Row } from 'react-grid-system';

class Opensource extends Component {
  render() {
    return (
        <Container>
        <div className="headline">
        <Row style={{padding: '10px'}}>
                <Col sm={12}>
                <b>Open Sourced Development</b>
    
    <p className='yomama'><span className="headlinemeta">We Take Pride in Being Open Sourced Software<br/>
    <hr className="solid"/>
    <b><span>Web: The Full Web Interface of Diplomatica</span></b><br/>
    <b><span>ML-App: Our Machine Learning Models</span></b><br/>
    <b><span>Profanity-Filter: Keeping our platform safe</span></b><br/>
    <b><span>ML-Foundation: Natrual Language Processing + Forecasting</span></b><br/>
    <b><span>ChatBackend: Infrastructure behind our chat app</span></b><br/>
    <b><span>Data-Extraction: Scraping the Web for Article Content</span></b><br/>
   
    <button className="thisbutton">Check Out The Code</button><br/>
    - Rajan 🕺, Veer ⚙️ and Jaival 🔮
    </span></p>
                </Col>
            </Row>
    </div>
    </Container>
    );
  }
}

export default Opensource;