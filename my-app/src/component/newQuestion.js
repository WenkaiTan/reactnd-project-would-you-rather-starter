import React, {Component} from 'react'
import { Container, Card, CardHeader, CardBody, CardTitle, CardText, Button, Row, Col
,Form, FormGroup, Input, } from 'reactstrap'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/_DATA'
import { handleSaveQuestion } from '../action/questions'
class NewQuestion extends Component{
    state = {
        optionOneText:'',
        optionTwoText:''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {optionOneText, optionTwoText} = this.state   
        const {dispatch, authedUser} = this.props
        const author = authedUser
        const question = formatQuestion({ optionOneText, optionTwoText, author })
        dispatch(handleSaveQuestion(question))

        this.setState({
            optionOneText:'',
            optionTwoText:''
        })

    }
    render(){
        const {authedUser} = this.props
        return(
            <Container >
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <Card>
                            <CardHeader tag="h3" className='text-center'>Create New Question</CardHeader>
                            <CardBody>
                                <CardText>Complete the question:</CardText>
                                <CardTitle className='b'>Would you rather ...</CardTitle>
                                <Form onSubmit={this.handleSubmit}>
                                    <FormGroup>
                                        <Input 
                                        type="text" 
                                        name="optionOneText" 
                                        placeholder="Enter option one text here" 
                                        value={this.state.optionOneText}
                                        onChange={this.handleChange} />
                                    </FormGroup>
                                    <CardText className='text-center b'>OR</CardText>
                                    <FormGroup>
                                        <Input 
                                        type="text" 
                                        name="optionTwoText" 
                                        placeholder="Enter option two text here" 
                                        value={this.state.optionTwoText}
                                        onChange={this.handleChange} />
                                    </FormGroup>
                                    <Button type='submit' color="success" size='lg' block>Submit</Button>{' '}
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

function mapStateToProps({authedUser}){
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(NewQuestion)