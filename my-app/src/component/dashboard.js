import React, { Component } from 'react'
import { connect } from 'react-redux'

class Dashboard extends Component{
    render(){
        return(
            <div>
                <ul className='dashboard-list'>
                    {this.props.questions.map((id) => (
                        <li key={id}></li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state)
    const {questions} = state
    return {
        questionIds: Object.keys(questions)
            .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    }
}
export default connect(mapStateToProps)(Dashboard)