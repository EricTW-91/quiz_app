import userInfoReducer from "./userReducer";
import quizReducer from "./quizReducer"
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    userInfoReducer,
    quizReducer
})

export default rootReducer;