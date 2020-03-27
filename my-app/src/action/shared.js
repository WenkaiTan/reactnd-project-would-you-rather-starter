import { getInitialData, saveQuestionAnswer } from '../utils/api'
import { receiveQuestions,saveQuestionVote } from './questions'
import { receiveUsers, saveUsersAnswer } from './users'



export function handleInitialDataAction(){
    return dispatch => {
        return getInitialData()
        .then(({users, questions}) => {
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
        })
    }
}

export function handleAnswer(qid, answer){
    return (dispatch, getState) => {
        const { authedUser } = getState()
        const info = {
            authedUser,
            qid,
            answer
        }
        return saveQuestionAnswer(info)
        .then(() => {
            dispatch(saveUsersAnswer(authedUser, qid, answer))
            dispatch(saveQuestionVote(authedUser, qid, answer))
        })
    }
}