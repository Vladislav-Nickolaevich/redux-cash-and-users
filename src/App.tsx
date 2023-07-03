import React from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "./state/store";
import {addCashAC, getCashAC} from "./state/cash-reducer";

function App() {
    const dispatch = useDispatch()
    const cashSelector:number = useSelector<RootStateType, number>(state => state.cash.cash)

    const addCash = (value: number) => {
        dispatch(addCashAC(value))
    }
    const getCash = (value: number) => {
        dispatch(getCashAC(value))
    }
    return (
        <div>
            <div>{cashSelector}</div>
            <div>
                <button onClick={() => addCash(Number(prompt()))}>Add cash</button>
                <button onClick={() => getCash(Number(prompt()))}>Get cash</button>
            </div>
        </div>
    );
}

export default App;
