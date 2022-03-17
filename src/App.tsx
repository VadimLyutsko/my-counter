import React, {useEffect, useState} from 'react';
import './App.css';
import {CounterContainer} from "./components/counter/CounterContainer";
import {SettingsCounterContainer} from "./components/settingsCounter/SettingsCounterContainer";
import {start} from "repl";

function App() {
    const [count, setCount] = useState<number>(0);
    const [startCount, setStartCount] = useState<number>(0)
    const [maxCount, setMaxCount] = useState<number>(0)


    // useEffect(() => {
    //   //  setStartValueToLocalStorage()
    //   //  setMaxValueToLocalStorage()
    // }, [startCount, maxCount])



    useEffect(() => {
        let startCountAsString = localStorage.getItem("start value")
        let maxCountAsString = localStorage.getItem("max value")

        if (maxCountAsString) {
            let maxCountValue = JSON.parse(maxCountAsString)
            setMaxCount(maxCountValue)
        }

        if (startCountAsString) {
            let startCountValue = JSON.parse(startCountAsString)
            setStartCount(startCountValue)
        }
    }, [])


    // const setStartValueToLocalStorage = () => {
    //     if (startCount !==0 && maxCount !== 0 ){
    //         localStorage.setItem("start value", JSON.stringify(startCount))
    //     }
    // }
    // const setMaxValueToLocalStorage = () => {
    //     if (startCount !==0 && maxCount !== 0 ){
    //         localStorage.setItem("max value", JSON.stringify(maxCount))
    //     }
    // }

    const setToLocalStorage = () => {
        if (startCount !==0 && maxCount !== 0 ){
            localStorage.setItem("start value", JSON.stringify(startCount))
        }
        if (startCount !==0 && maxCount !== 0 ){
            localStorage.setItem("max value", JSON.stringify(maxCount))
        }


        // setStartValueToLocalStorage()
        // setMaxValueToLocalStorage()
        // localStorage.setItem("start value", JSON.stringify(startCount))
        // localStorage.setItem("max value", JSON.stringify(maxCount))
    }


    const getFromLocalStorage = () => {

        // let startCountAsString = localStorage.getItem("start value")
        // let maxCountAsString = localStorage.getItem("max value")
        //
        // if (maxCountAsString) {
        //     let maxCountValue = JSON.parse(maxCountAsString)
        //     setMaxCount(maxCountValue)
        //
        // }
        //
        // if (startCountAsString) {
        //     let startCountValue = JSON.parse(startCountAsString)
        //     setStartCount(startCountValue)
        //
        // }
    }


    return (
        <div className="App">
            <SettingsCounterContainer
                setStartCount={setStartCount}
                setMaxCount={setMaxCount}
                setToLocalStorage={setToLocalStorage}
                getFromLocalStorage={getFromLocalStorage}
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
