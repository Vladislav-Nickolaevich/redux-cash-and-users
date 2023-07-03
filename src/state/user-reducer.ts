import {GetManyUsersType} from "./getManyUsers";

const ADD_USER = 'ADD-USER'
const DELETE_USER = 'DELETE-USER'
const GET_USERS = 'GET-USERS'

type ActionType = AddUserAC | DeleteUserAC | GetManyUsersAC

export type UserType = {
    id: string, userName: string
}
type initialUserStateType = {
    users: UserType[]
}


const initialUserState: initialUserStateType = {
    users: [
        {id: String(Date.now()), userName: 'Vlad'}
    ]
}

export const userReducer = (state: initialUserStateType = initialUserState, action: ActionType) : initialUserStateType => {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state, users: [...state.users, action.user]
            }
        case DELETE_USER:
            return {
                ...state, users: state.users.filter(u => u.id !== action.id)
            }
        case GET_USERS:
            const userGet = action.users.map(u => ({id: String(u.id), userName: u.name[0].toUpperCase() + u.name.slice(1)} ))
            return {
                ...state, users: [...state.users, ...userGet]
            }
        default:
            return state
    }
}

type AddUserAC = ReturnType<typeof addUserAC>
export const addUserAC = (user: UserType) => ({type: ADD_USER, user} as const)

type DeleteUserAC = ReturnType<typeof deleteUserAC>
export const deleteUserAC = (id: string) => ({type: DELETE_USER, id} as const)

type GetManyUsersAC = ReturnType<typeof getManyUsersAC>
export const getManyUsersAC = (users: GetManyUsersType[]) => ({type: GET_USERS, users} as const)

