import React, {Component} from 'react'
import {
    Table, Container, CardImg
} from 'reactstrap'
import { connect } from 'react-redux'

class LeaderBoard extends Component {
    render(){
        const {users} = this.props
        return(
            <Container>
                <Table>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Profile</th>
                            <th>Answered questions</th>
                            <th>Created questions</th>
                            <th>Total score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user.id}>
                                <th scope="row">{index+1}</th>
                                <td><CardImg style={{width:50,height:50}}src={user.avatarURL} alt={user.name}></CardImg></td>
                                <td>{Object.keys(user['answers']).length}</td>
                                <td>{user.questions.length}</td>
                                <td></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        )
    }
}

function mapStateToProps({users}){
    const userScore = user => 
        Object.keys(user['answers']).length + user.questions.length
    return {
        users: Object.values(users).sort((a,b) => userScore(b) - userScore(a))
    }
}

export default connect(mapStateToProps)(LeaderBoard)