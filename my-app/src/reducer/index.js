import { combineReducers } from 'redux'
import  user  from './users'
import  question  from './questions'
import authedUser from './authedUser'


export default combineReducers({
    user,
    question,
    authedUser
})