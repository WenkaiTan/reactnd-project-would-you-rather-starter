import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
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
        const { id, author, timestamp, optionOne, optionTwo } = question

        if(question === null){
            return <p>This question does not exist!</p>
        }

        return(
            <div className='question-info'>
                {/* {this.renderRedirect()} */}
                <h3>{author} asks:</h3>
                <img 
                    src='https://image.flaticon.com/icons/svg/684/684195.svg' height="50" width="50"
                    alt={author} 
                    className='avatar'/>
                <div>
                    <span>Would you rather </span><br />
                    <span>...</span><br />
                    <button className='btn' onClick={(e) => this.handleRedirect(e, id)}>View poll</button>
                </div>
            </div>
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