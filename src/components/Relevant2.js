import React, { Component } from "react";
import "./Component.css";
import { Container, Col, Row } from 'react-grid-system';

class Relevant2 extends Component {
  render() {
    return (
        <Container>
        <div className="headline">
        <Row style={{padding: '10px'}}>
                <Col sm={12}>
                <b>Facts about the Election</b>
    
    <p className='yomama'><span className="headlinemeta">
    <hr className="solid"/>
    <div className="leaderboardchild">The Liberal Party of Canada is the longest-serving and oldest active federal political party in Canada. The party has dominated federal politics for much of Canada's history, holding power for almost 70 years of the 20th century. As a result, it has sometimes been referred to as Canada's "natural governing party"</div>
    <div className="leaderboardchild">The Conservative Party of Canada, colloquially known as the Tories, is a federal political party in Canada. It was formed in 2003 from the multiple right-leaning parties which had existed in Canada for over a century, historically grouped into two camps known as the "Red Tories" and the "Blue Tories".</div>
    <div className="leaderboardchild">The New Democratic Party is a social democratic federal political party in Canada. The party was founded in 1961 by the Co-operative Commonwealth Federation and the Canadian Labour Congress. On the political spectrum, the party sits to the left of the Liberal Party</div>
    <div className="leaderboardchild">The Green Party of Canada is a federal political party in Canada, founded in 1983 with a focus on green politics. The party has been led by Annamie Paul since 3 October 2020. </div>
    <div className="leaderboardchild">The Bloc Québécois is a federal political party in Canada devoted to Quebec nationalism and the promotion of Quebec sovereignty. The Bloc was formed by Members of Parliament who defected from the federal Progressive Conservative Party and Liberal Party during the collapse of the Meech Lake Accord. </div>
    
    
   
    </span></p>
                </Col>
            </Row>
    </div>
    </Container>
    );
  }
}

export default Relevant2;