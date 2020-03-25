import { RECEIVE_USER } from "../action/users";

export default function users(state={}, action){
    switch(action.type){
        case RECEIVE_USER:
            return{
                ...state,
                ...action.users
            }
        default:
            return state
    }
}