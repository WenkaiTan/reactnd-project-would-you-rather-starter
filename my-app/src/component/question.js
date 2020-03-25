import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Card, CardHeader, CardImg, CardBody, CardTitle, FormGroup, Label, Input, Form, Button, Row, Col } from 'reactstrap'
import { saveQuestion, saveQuestionAnswer } from '../utils/api'
class Question extends Component {
    state = {
        selectedOption: ''
    }

    handleChange = (e) => {
        this.setState({
            selectedOption: e.target.value
        })
    }

    handleSubmit = (e) => {

        e.preventDefault()
        this.props.dispatch(saveQuestionAnswer(this.state.selectedOption))
    }
    render(){
        // const { id } = this.props.match.params
        const { question, users, answer } = this.props
        const { id, author, optionOne, optionTwo } = question
        // const { name, avatarURL, answers, questions } = users
        return(
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3}}>
                    <Card>
                        <CardHeader className='c'>{author} asks:</CardHeader>
                        <CardBody>
                            {answer? 
                            <div>
                                <FormGroup>
                                    <FormGroup check disabled>
                                        <Label check>
                                            <Input type="radio" checked={answer === "optionOne"} readOnly />{' '}
                                            {question.optionOne.text}
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check disabled>
                                        <Label check>
                                            <Input type="radio" checked={answer === "optionTwo"} readOnly />{' '}
                                            {question.optionTwo.text}
                                        </Label>
                                    </FormGroup>
                                </FormGroup>
                                <div className="progress">
                                    <div className="progress-one" style={{ width: `${percOne}%` }}>{`${percOne}%`}</div>
                                    <div className="progress-two" style={{ width: `${percTwo}%` }}>{`${percTwo}%`}</div>
                                </div>
                                <div className="total">
                                    Total number of votes: {total}
                                </div>
                            </div> 
                            :
                            <Row>
                                <Col xs="4">
                                    <CardImg src={users[author].avatarURL} alt={author} ></CardImg>
                                </Col>
                                <Col xs="8">
                                    <CardTitle className='c'>Would you rather...</CardTitle>
                                    <Form onSubmit={(e) => this.handleSubmit}>
                                        <FormGroup>
                                            <FormGroup>
                                                <Label>
                                                    <Input type="radio" name="radio1" value="optionOne" onChange={(e) => this.handleChange} />{' '}
                                                    {optionOne.text}
                                                </Label>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label>
                                                    <Input type="radio" name="radio1" value="optionTwo" onChange={(e) => this.handleChange} />{' '}
                                                    {optionTwo.text}
                                                </Label>
                                            </FormGroup>
                                        </FormGroup>
                                        <Button color="success" size="lg" block>Submit</Button>
                                    </Form>
                                </Col>
                            </Row>
                            }
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        )
    }
}

function mapStateToProps({ users, questions, authedUser }, { id }) {
    // const { id } = this.props.match.params
    let answer, total
    const question = questions[id]
    const answers = users[authedUser].answers
    // if(answers.hasOwnProperty(question.id)){
    //     answer = answers[question.id]
    // }
    return {
        users,
        question,
        // answer
    }
}

export default connect(mapStateToProps)(Question)