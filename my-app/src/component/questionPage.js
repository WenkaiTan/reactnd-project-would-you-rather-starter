import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {
    Card, Button, CardHeader, CardBody,
    CardTitle, CardText, CardImg,Col,Row, Container
} from 'reactstrap'
class QuestionPage extends Component {
    state = {
        toQuestion: false
    }
    handleRedirect = () => {
        this.setState({
            toQuestion: true
        })
    }

    // renderRedirect = (e, id) => {
    //     if(this.state.toQuestion){
    //         return <Redirect to='/questions/:id' />
    //     }
    // }

    render(){
        const { question, users } = this.props
        const {optionOne, author} = question
        if(question === null){
            return <p>This question does not exist!</p>
        }

        return(

            <Container>
                <Card>
                    {/* {this.renderRedirect()} */}
                    <CardHeader className='c'>{author} asks:</CardHeader>
                    <CardBody>
                        <Row>
                            <Col xs="4">
                                <CardImg src={users[author].avatarURL} alt={author} ></CardImg>
                            </Col>
                            <Col xs="8">
                                <CardTitle className='b'>Would you rather</CardTitle>
                                <CardText>...{optionOne.text.split(' ')[0]}...</CardText>
                                <br />
                                <br />
                                <Button color="success" size="lg" block>View Poll</Button>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Container>
        )
    }
}

function mapStateToProps({ users, questions }, {id}){
    const question = questions[id]
    return{
        users,
        question
    }
}

export default connect(mapStateToProps)(QuestionPage)