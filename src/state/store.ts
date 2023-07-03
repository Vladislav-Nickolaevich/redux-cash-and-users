import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import {cashReducer} from "./cash-reducer";
import {userReducer} from "./user-reducer";
import thunk, {ThunkDispatch} from "redux-thunk";
import {useDispatch} from "react-redux";

export type RootStateType =  ReturnType< typeof rootReducer>


const rootReducer = combineReducers({
    cash: cashReducer,
    users: userReducer
})


const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppDispatch = ThunkDispatch<RootStateType, any, AnyAction>
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store