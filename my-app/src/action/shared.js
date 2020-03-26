import { getInitialData, saveQuestionAnswer } from '../utils/api'
import { receiveQuestions,saveQuestionVote } from './questions'
import { receiveUsers, saveUsersAnswer } from './users'
import { setAuthedUser } from './authedUser'


const AUTHED_ID = "tylermcginnis"
export function handleInitialDataAction(){
    return dispatch => {
        return getInitialData()
        .then(({users, questions}) => {
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
            dispatch(setAuthedUser(AUTHED_ID))
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