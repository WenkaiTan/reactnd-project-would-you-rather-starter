import React, {Component} from 'react'
import {
    Card, CardImg, CardText,
    CardTitle, CardSubtitle, Button, CardHeader, Container,Row, Col, Form, FormGroup, Input
} from 'reactstrap'
import { connect } from 'react-redux'
import {setAuthedUser} from '../action/authedUser'
import {Redirect} from 'react-router-dom'
class SignIn extends Component {
  componentDidMount(){
    console.log("this.props =>\n\n", this.props)
  }
    state = {
        selectedOption: '',
        toHome: false
    }

    handleChange = (e) => {
        this.setState({
            selectedOption: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // console.log(this.state.selectedOption)
        const index = this.state.selectedOption
        const { dispatch,users } = this.props
        dispatch(setAuthedUser(users[index].id))
        this.setState({
            toHome:true
        })
    }
    render(){
        const { users } = this.props
        if(this.state.toHome === true){
            return <Redirect to='/'/>
        }
        return (
          <Container>
            <Row>
              <Col sm="12" md={{ size: 6, offset: 3 }}>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-center b h4">
                      Welcome to the Would You Rather App!
                    </CardTitle>
                    <CardSubtitle className="text-center">
                      Please sign in to continue
                    </CardSubtitle>
                  </CardHeader>
                  <CardImg
                    style={{ width: "380", height: "180" }}
                    src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                    alt="Card image cap"
                  />
                  <CardText className="text-center b h2 text-success">
                    Sign in
                  </CardText>
                  <Form onSubmit={(e) => this.handleSubmit(e)}> 
                    <FormGroup>
                      <Input
                        type="select"
                        name="select"
                        value={this.state.selectedOption}
                        onChange={(e) => this.handleChange(e)}
                      >
                        <option value='' disabled>Select User:</option>
                        {users.map((user,index) => (
                            <option key={user.id} value={index}>{user.name}</option>
                        ))}
                      </Input>
                    </FormGroup>
                    <Button size='lg' color='success'  block disabled={this.state.selectedOption===''}>Submit</Button>
                  </Form>
                </Card>
              </Col>
            </Row>
          </Container>
        );
    }
}

function mapStateToProps({users}){
    return{
        users: Object.values(users)
    }
}

export default connect(mapStateToProps)(SignIn)