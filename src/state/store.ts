import {combineReducers, createStore} from "redux";
import {cashReducer} from "./cash-reducer";
import {userReducer} from "./user-reducer";

export type RootStateType =  ReturnType< typeof rootReducer>


const rootReducer = combineReducers({
    cash: cashReducer,
    users: userReducer
})


const store = createStore(rootReducer)


export default store