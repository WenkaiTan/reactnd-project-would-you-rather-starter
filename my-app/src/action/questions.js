import { saveQuestion } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_QUESTION_VOTE = 'SAVE_QUESTION_VOTE'
export const SAVE_QUESTION = 'SAVE_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'

export function receiveQuestions(questions){
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export function saveQuestionVote(authedUser, qid, answer){
    return{
        type: SAVE_QUESTION_VOTE,
        authedUser, 
        qid, 
        answer
    }
}

export function addQuestion(question){
    return {
        type: ADD_QUESTION,
        question
    }
}

export function handleSaveQuestion({optionOneText, optionTwoText}){
    return(dispatch, getState) => {
        const { authedUser } = getState()
        const question = {
        optionOneText,
        optionTwoText, 
        author: authedUser
        }
        dispatch(showLoading())
        return saveQuestion(question)
        .then((question) => dispatch(addQuestion(question)))
        .then(() => dispatch(hideLoading()))
    }

}