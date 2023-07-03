import {combineReducers, createStore} from "redux";
import {cashReducer} from "./cash-reducer";

export type RootStateType =  ReturnType< typeof rootReducer>


const rootReducer = combineReducers({
    cash: cashReducer,
})


const store = createStore(rootReducer)


export default store