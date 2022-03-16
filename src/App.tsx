import React, {useEffect, useState} from 'react';
import './App.css';
import {CounterContainer} from "./components/counter/CounterContainer";
import {SettingsCounterContainer} from "./components/settingsCounter/SettingsCounterContainer";

function App() {
    const [count, setCount] = useState<number>(0);
    const [startCount, setStartCount] = useState<number>(0)
    const [maxCount, setMaxCount] = useState<number>(0)


    // useEffect(() => {
    //     setStartValueToLocalStorage()
    // }, [startCount])
    //
    // useEffect(() => {
    //     setMaxValueToLocalStorage()
    // }, [maxCount])

    // useEffect(() => {
    //     let startCountAsString = localStorage.getItem("start value")
    //     let maxCountAsString = localStorage.getItem("max value")
    //
    //     if (maxCountAsString) {
    //         let maxCountValue = JSON.parse(maxCountAsString)
    //         setMaxCount(maxCountValue)
    //     }
    //
    //     if (startCountAsString) {
    //         let startCountValue = JSON.parse(startCountAsString)
    //         setStartCount(startCountValue)
    //     }
    // }, [])


    const setStartValueToLocalStorage = () => {
        localStorage.setItem("start value", JSON.stringify(startCount))
    }
    const setMaxValueToLocalStorage = () => {
        localStorage.setItem("max value", JSON.stringify(maxCount))
    }
    const setToLocalStorage = () => {
        setStartValueToLocalStorage()
        setMaxValueToLocalStorage()
        // localStorage.setItem("start value", JSON.stringify(startCount))
        // localStorage.setItem("max value", JSON.stringify(maxCount))
    }


    const getFromLocalStorage = () => {
        let startCountAsString = localStorage.getItem("start value")
        let maxCountAsString = localStorage.getItem("max value")

        if (maxCountAsString) {
            let maxCountValue = JSON.parse(maxCountAsString)
            setMaxCount(maxCountValue)
            console.log(maxCountValue)
        }

        if (startCountAsString) {
            let startCountValue = JSON.parse(startCountAsString)
            setStartCount(startCountValue)
            console.log(startCountValue)
        }
    }


    return (
        <div className="App">
            <SettingsCounterContainer
                setStartCount={setStartCount}
                setMaxCount={setMaxCount}
                setToLocalStorage={setToLocalStorage}
                getFromLocalStorage={getFromLocalStorage}
            />

            <CounterContainer
                count={count}
                setCount={setCount}
            />
        </div>
    );
}

export default App;
