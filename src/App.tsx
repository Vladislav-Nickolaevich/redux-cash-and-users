import React from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "./state/store";
import {addCashAC, getCashAC} from "./state/cash-reducer";
import {addUserAC, deleteUserAC, UserType} from "./state/user-reducer";


function App() {
    const dispatch = useDispatch()
    const cashSelector: number = useSelector<RootStateType, number>(state => state.cash.cash)
    const userSelector: UserType[] = useSelector<RootStateType, UserType[]>(state => state.users.users)


    const addCash = (value: number) => {
        dispatch(addCashAC(value))
    }
    const getCash = (value: number) => {
        dispatch(getCashAC(value))
    }


    const addUser = (name: string) => {
        const nameUpperCast = name[0].toUpperCase() + name.slice(1)

        const user = {id: String(Date.now()), userName: nameUpperCast}
        dispatch(addUserAC(user))
    }
    const deleteUser = (user: UserType) => {
        dispatch(deleteUserAC(user.id))
    }
    return (
        <div>
            <div style={{textAlign: 'center', marginTop: '20px'}}>{cashSelector}</div>
            <div>
                <button onClick={() => addCash(Number(prompt()))}>Add cash</button>
                <button onClick={() => getCash(Number(prompt()))}>Get cash</button>

                <button onClick={() => addUser(String(prompt()))}>Add User</button>
            </div>

            <div style={{textAlign: 'center', marginTop: '20px'}}>
                {
                    userSelector.length !== 0?
                        userSelector.map(u => {
                                return (
                                    <div key={u.id} onClick={() => deleteUser(u)}>
                                        {u.userName}
                                    </div>
                                )
                            }):
                        <span>Клиентов нету</span>
                }
                </div>
        </div>
    );
}

export default App;
