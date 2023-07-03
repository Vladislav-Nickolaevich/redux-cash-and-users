import axios from "axios";
import {Action, Dispatch} from "redux";
import {getManyUsersAC} from "./user-reducer";


export type GetManyUsersType = {
    name: string
    id: number
    followed: boolean
    photos: {small: null, large: null}
    status:null
    uniqueUrlName: null
}


export const getManyUsers = () => {
    return (dispatch: Dispatch<Action>) => {
       axios.get('https://social-network.samuraijs.com/api/1.0/users?count=3')
            .then(data => {
                dispatch(getManyUsersAC(data.data.items))
            })
    }
}