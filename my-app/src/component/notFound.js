import React from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle, Button, Container
} from 'reactstrap';
import { Redirect } from 'react-router-dom'

class NotFound extends React.Component{
    state = {
        toHome: false
    }

    handleChange = (e) => {
        this.setState({
            toHome: true
        })
    }
    render(){
        if(this.state.toHome === true){
            return <Redirect to='/' />
        }
        return (
            <Container>
                <Card>
                    <CardImg top width="100%" src="https://i1.wp.com/saedx.com/blog/wp-content/uploads/2019/01/saedx-blog-featured-70.jpg?resize=1024%2C427&ssl=1" alt="Card image cap" />
                    <CardBody>
                        <CardTitle className='text-center h2'>Page not found.</CardTitle>
                        <Button block color='primary' onClick={(e) => this.handleChange(e)}>Go to Home</Button>
                    </CardBody>
                </Card>
            </Container>
        )
    }
};
export default NotFound