import React, {useEffect, useState} from 'react';
import './App.css';
import {CounterContainer} from "./components/counter/CounterContainer";
import {SettingsCounterContainer} from "./components/settingsCounter/SettingsCounterContainer";

function App() {

    const [count, setCount] = useState<number>(0)
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)

    const setStateToStartValue = (value: string) => {
        let startValueToString = JSON.parse(value)
        setStartValue(startValueToString)
    }
    const setStateToMaxValue = (value: string) => {
        let maxValueToString = JSON.parse(value)
        setMaxValue(maxValueToString)
    }


    const setToLocalStorageStartValue = (value: number | undefined) => {
        let startValueToString = JSON.stringify(value)
        localStorage.setItem('start value', startValueToString)
    }
    const setToLocalStorageMaxValue = (value: number | undefined) => {
        let maxValueToString = JSON.stringify(value)
        localStorage.setItem('max value', maxValueToString)
    }


    const saveNewStartCount = () => {
        setCount(startValue)
    }


    const incCount = () => {
        setCount(count + 1)
    }
    const resetCount = () => {
        setCount(startValue)
    }


    return (
        <div className="App">
            <SettingsCounterContainer
                setStateToStartValue={setStateToStartValue}
                setStateToMaxValue={setStateToMaxValue}
                setToLocalStorageStartValue={setToLocalStorageStartValue} startValue={startValue}
                setToLocalStorageMaxValue={setToLocalStorageMaxValue} maxValue={maxValue}
                saveNewStartCount={saveNewStartCount}

            />

            <CounterContainer
                count={count}
                incCount={incCount}
                resetCount={resetCount}
            />
        </div>
    );
}

export default App;




