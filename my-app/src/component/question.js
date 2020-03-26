import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Card, CardHeader, CardImg, CardBody, CardTitle, FormGroup, Label, Input, Form, Button, Row, Col } from 'reactstrap'
import { saveQuestion, saveQuestionAnswer } from '../utils/api'
import { handleAnswer } from '../action/shared'
class Question extends Component {
    state = {
        selectedOption: '',
        toggle: false
    }

    radioSelected = (e) => {
        this.setState({
            selectedOption: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.saveQuestionAnswer(this.state.selectedOption);
    };
    render(){
        const { question, users, answer, total, perOne, perTwo } = this.props
        const { author, optionOne, optionTwo } = question
        // const { name, avatarURL, answers, questions } = users
        if( question === null ){
            return <p>This tweet does not exist!</p>
        }
        return(
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3}}>
                    <Card>
                        <CardHeader className='c'>{author} asks:</CardHeader>
                        <CardBody>
                            <Row>
                                <Col xs="4">
                                    <CardImg src={users[author].avatarURL} alt={author} ></CardImg>
                                </Col>
                                <Col xs="8">
                                    <CardTitle className='c'>Would you rather...</CardTitle>
                                    {answer ? 
                                        <div>
                                            <FormGroup>
                                                <FormGroup check disabled>
                                                    <Label check>
                                                        <Input type="radio" checked={answer === "optionOne"} readOnly />{' '}
                                                        {optionOne.text}
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup check disabled>
                                                    <Label check>
                                                        <Input type="radio" checked={answer === "optionTwo"} readOnly />{' '}
                                                        {optionTwo.text}
                                                    </Label>
                                                </FormGroup>
                                            </FormGroup>
                                            <div className="progress">
                                                <div className="progress-one" style={{ width: `${perOne}%` }}>{`${perOne}%`}</div>
                                                <div className="progress-two" style={{ width: `${perTwo}%` }}>{`${perTwo}%`}</div>
                                            </div>
                                            <div className="total">
                                                Total number of votes: {total}
                                            </div>
                                        </div> :
                                        <Form onSubmit={(e) => this.handleSubmit}>
                                            <FormGroup tag='fieldset'>
                                                <FormGroup>
                                                    <Label>
                                                        <Input type="radio" name="radio1" value="optionOne" onChange={(e) => this.radioSelected} />{' '}
                                                        {optionOne.text}
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label>
                                                        <Input type="radio" name="radio1" value="optionTwo" onChange={(e) => this.radioSelected} />{' '}
                                                        {optionTwo.text}
                                                    </Label>
                                                </FormGroup>
                                            </FormGroup>
                                            <Button color="success" size="lg" block disabled={this.state.selectedOption === ''}>Submit</Button>
                                        </Form>
                                        }
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        )
    }
}

function financial(x){
    return Number.parseFloat(x).toFixed(2)
}

function mapStateToProps({ users, questions, authedUser }, { match }) {
    const { id } = match.params
    let answer, total, perOne, perTwo
    const question = questions[id]
    const answers = users[authedUser].answers
    if(answers.hasOwnProperty(question.id)){
        answer = answers[question.id]
    }
    total = question.optionOne.votes.length + question.optionTwo.votes.length
    perOne = financial((question.optionOne.votes.length / total)*100)
    perTwo = financial((question.optionTwo.votes.length / total) * 100)
    return {
        users,
        question,
        answer,
        perOne,
        perTwo,
        total
    }
}
function mapDispatchToProps(dispatch, {match}){
     const {id} = match.params
    return{
        saveQuestionAnswer: (answer) => {
            dispatch(handleAnswer(id, answer))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Question)