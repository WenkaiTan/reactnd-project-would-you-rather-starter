import React, {Component} from 'react'
import {
    Card, CardBody,
    CardTitle, CardText, CardImg, Col, Row
} from 'reactstrap'
import { connect } from 'react-redux'
class LeaderBoard extends Component {
    render(){

        return(
            {/* <Card >
                <CardBody>
                    <Row>
                        <Col xs="4">
                            <CardImg
                                src={users[author].avatarURL}
                                alt={author}
                            ></CardImg>
                        </Col>
                        <Col xs="8">
                            <CardTitle className="b">Would you rather</CardTitle>
                            <CardText>...{optionOne.text.split(" ")[0]}...</CardText>
                            <br />
                            <br />
                            <Button
                                color="success"
                                size="lg"
                                block
                                onClick={(e) => this.loadQuestionDetail(e, id)}>
                                View Poll
                    </Button>
                        </Col>
                    </Row>
                </CardBody>
            </Card> */}
        )
    }
}

function mapStateToProps({users, questions}){

}

export default connect(mapStateToProps)(LeaderBoard)