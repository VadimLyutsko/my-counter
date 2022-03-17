import React, {useEffect, useState} from 'react';
import './App.css';
import {CounterContainer} from "./components/counter/CounterContainer";
import {SettingsCounterContainer} from "./components/settingsCounter/SettingsCounterContainer";
import {start} from "repl";

function App() {
    const [count, setCount] = useState<number>(0);
    const [startCount, setStartCount] = useState<number>(0)
    const [maxCount, setMaxCount] = useState<number>(0)
    const [message, setMessage] = useState<string>('Enter values and press "Set"')

    useEffect(() => {
        let startCountAsString = localStorage.getItem("start value")
        let maxCountAsString = localStorage.getItem("max value")

        if (startCountAsString) {
            let startCountValue = JSON.parse(startCountAsString)
            setStartCount(startCountValue)
        }

        if (maxCountAsString) {
            let maxCountValue = JSON.parse(maxCountAsString)
            setMaxCount(maxCountValue)
        }

    }, [])

    const setToLocalStorage = () => {
        if (startCount !== 0 && maxCount !== 0) {
            localStorage.setItem("start value", JSON.stringify(startCount))
        }
        if (startCount !== 0 && maxCount !== 0) {
            localStorage.setItem("max value", JSON.stringify(maxCount))
        }
    }




    return (
        <div className="App">
            <SettingsCounterContainer
                setStartCount={setStartCount}
                setMaxCount={setMaxCount}
                setToLocalStorage={setToLocalStorage}
                startCount={startCount}
                maxCount={maxCount}
            />

            <CounterContainer
                count={count}
                setCount={setCount}
            />
        </div>
    );
}

export default App;
