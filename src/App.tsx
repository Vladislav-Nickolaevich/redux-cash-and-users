import React, {useState} from 'react';
import './App.css';

function App() {
    const [cash, setCash] = useState<number>(0)
    const addCash = (value: number) => {
        setCash(value)
    }
    const getCash = (value: number) => {
        setCash(value)
    }
    return (
        <div>
            <div>{cash}</div>
            <div>
                <button onClick={() => addCash(Number(prompt()))}>Add cash</button>
                <button onClick={() => getCash(Number(prompt()))}>Get cash</button>
            </div>
        </div>
    );
}

export default App;
