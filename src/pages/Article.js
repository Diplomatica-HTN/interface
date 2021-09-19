import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { Link } from 'react-router-dom'
import "../App.css";
import './pages.css';

export default function Article() {
  return (
    <div className="App">

      <Container>
        <header className="App-header">
          <Row>
          <Col sm={12} className="landingheader">
            <br/>
            <h2 className="explorehead">Last Minute Voter's Guide</h2>
            <p className="center">Source: <a href="https://globalnews.ca/news/8188343/2021-canada-election-cheat-sheet/">Global News</a>, Summarized by AI</p>
            
          </Col>
          </Row>
          <Row>
            <Col sm={12} className="">
                <p className="articletext">Still undecided about which federal party for whom you should cast your vote? Here’s everything you need to know before the 2021 federal election on Sept. 20. The NDP promised to include pharmacare in the health-care system, while the Greens said they would do the same and include universal dental care. The Liberals promised to extend the Canada Recovery Hiring Benefit (CRHB) and boost the tourism industry with a temporary wage and rent support. The NDP and Liberals promised to end “renovictions,” while the Greens said they would declare a moratorium on evictions.
<br/>
<br/>
<Row>
              <Col sm={5}>
              <p><Link to="/dashboard"><span role="img" aria-label="emoji">👈</span> Go back to Dashboard</Link></p>
              </Col>
              <Col sm={3}></Col>
              <Col sm={4}>
              <p><Link to="/visualize">Summarize A Custom Article <span role="img" aria-label="emoji">📰</span></Link></p>
              </Col>
          </Row>

</p>
            
             
              
            </Col>
            <Col sm={2}></Col>
          </Row>
        </header>
      </Container>
    </div>
  );
}
