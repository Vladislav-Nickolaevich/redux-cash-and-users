import {combineReducers, createStore} from "redux";

export type RootStateType =  ReturnType< typeof rootReducer>


const rootReducer = combineReducers({

})


const store = createStore(rootReducer)


export default store