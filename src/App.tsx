import React from 'react';
import './App.css';
import {useSelector} from "react-redux";
import {RootStateType, useAppDispatch} from "./state/store";
import {addCashAC, getCashAC} from "./state/cash-reducer";
import {addUserAC, deleteUserAC, UserType} from "./state/user-reducer";
import {getManyUsers} from "./state/getManyUsers";


const  App = () => {
    const dispatch = useAppDispatch()
    const cashSelector: number = useSelector<RootStateType, number>(state => state.cash.cash)
    const userSelector: UserType[] = useSelector<RootStateType, UserType[]>(state => state.users.users)


    const addCash = (value: string) => {
        isFinite(+value) && dispatch(addCashAC(+value))
    }
    const getCash = (value: string) => {
        isFinite(+value) && dispatch(getCashAC(+value))
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
                <button onClick={() => addCash(String(prompt()))}>Add cash</button>
                <button onClick={() => getCash(String(prompt()))}>Get cash</button>

                <button onClick={() => addUser(String(prompt()))}>Add User</button>
                <button onClick={() => dispatch(getManyUsers())}>Get Users</button>
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
