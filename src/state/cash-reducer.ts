const ADD_CASH = 'ADD-CASH'
const GET_CASH = 'GET-CASH'

type ActionType = AddCashAC | GetCashAC

type initialCashStateType = {
    cash: number
}
const initialCashState = {
    cash: 0
}

export const cashReducer = (state: initialCashStateType = initialCashState, action: ActionType) : initialCashStateType => {
    switch (action.type) {
        case ADD_CASH:
            return {...state, cash: state.cash + action.cash}
        case GET_CASH:
            return {...state, cash: state.cash + action.cash}
        default:
            return state
    }
}

type AddCashAC = ReturnType<typeof addCashAC>
export const addCashAC = (cash: number) => ({type: ADD_CASH, cash} as const)

type GetCashAC = ReturnType<typeof getCashAC>
export const getCashAC = (cash: number) => ({type: GET_CASH, cash} as const)