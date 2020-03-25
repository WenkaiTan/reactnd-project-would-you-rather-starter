import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import QuestionPage from './questionPage'
// import Question from'./question'
import classnames from 'classnames';
class Dashboard extends Component{
    state = {
        activeTab: '1'
    }

    toggle = tab => {
        if (this.state.activeTab !== tab){
            this.setState({
                activeTab: tab
            })
        }
    }
    render(){
        const { answeredQuestionIds, unansweredQuestionIds } = this.props
        return (
            <Row>
              <Col sm="12" md={{ size: 6, offset: 3 }}>
                <Nav tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: this.state.activeTab === "1"
                      })}
                      onClick={() => {
                        this.toggle("1");
                      }}
                    >
                      unanswered Questions
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: this.state.activeTab === "2"
                      })}
                      onClick={() => {
                        this.toggle("2");
                      }}
                    >
                      Answered Questions
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
              <Col sm="12" md={{ size: 6, offset: 3 }}>
                <div></div>
                <TabContent activeTab={this.state.activeTab}>
                  <TabPane tabId="1">
                    <Row>
                        {unansweredQuestionIds.map(id => 
                        <QuestionPage id={id}/>
                        )}
                    </Row>
                  </TabPane>
                  <TabPane tabId="2">
                    <Row>
                        {answeredQuestionIds.map(id => 
                        <QuestionPage id={id} />
                        )}
                    </Row>
                  </TabPane>
                </TabContent>
              </Col>
            </Row>
        );
    }
}

function mapStateToProps({ questions, users, authedUser }) {
    let answeredQuestionIds = [];
    let unansweredQuestionIds = [];
    const user = users[authedUser]
    if (user) {
        answeredQuestionIds = Object.keys(user["answers"])
            .sort((a, b) => questions[b].timestamp - questions[a].timestamp);
        unansweredQuestionIds = Object.keys(questions)
            .filter((qid) => qid !== answeredQuestionIds)
            .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    }

    return {
        answeredQuestionIds,
        unansweredQuestionIds
    }
}
export default connect(mapStateToProps)(Dashboard)