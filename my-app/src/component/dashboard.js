import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
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
        return (
          <div>
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
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Row>
                  <Col sm="12">
                    <h4>Tab 1 Contents</h4>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Col sm="6">
                    <Card body>tab2</Card>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </div>
        );
    }
}

function mapStateToProps({questions, users, authedUser}) {

    const user = users[authedUser]
    console.log(user)
    // const answeredQuestionIds = Object.keys(user[answers])
    //         .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    // return {
    //     answeredQuestionIds,
    //     unansweredQuestionIds: Object.keys(questions)
    //     .filter((qid) => qid !== answeredQuestionIds)
    //     .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    // }
}
export default connect(mapStateToProps)(Dashboard)