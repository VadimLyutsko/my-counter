import React, {useState} from 'react';
import './App.css';
import {CounterContainer} from "./components/counter/CounterContainer";
import {SettingsCounterContainer} from "./components/settingsCounter/SettingsCounterContainer";

function App() {
    const [count, setCount] = useState(0);
    const [startCount, setStartCount] = useState(0)
    const [maxCount, setMaxCount] = useState(0)


    const setToLocalStorage = () => {
        let start = JSON.stringify(startCount)
        let max = JSON.stringify(maxCount)
        localStorage.setItem("start value", start)
        localStorage.setItem("max value", max)
    }

    return (
        <div className="App">
            <SettingsCounterContainer
                setStartCount={setStartCount}
                setMaxCount={setMaxCount}
                setToLocalStorage={setToLocalStorage}
            />

            <CounterContainer
                count={count}
                setCount={setCount}
            />
        </div>
    );
}

export default App;
