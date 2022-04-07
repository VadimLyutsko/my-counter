import React, {useEffect, useState} from 'react';
import './App.css';
import {CounterContainer} from "./components/counter/CounterContainer";
import {SettingsCounterContainer} from "./components/settingsCounter/SettingsCounterContainer";

function App() {

    const [count, setCount] = useState<number>(0)
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)


    useEffect(() => {
        getFromLocalStorage()
    }, [])


    const setStateToStartValue = (value: string) => {    //сетает в startValue значение из поля ввода
        let startValueToString = JSON.parse(value)
        setStartValue(startValueToString)
    }
    const setStateToMaxValue = (value: string) => {      //сетает в maxValue значение из поля ввода
        let maxValueToString = JSON.parse(value)
        setMaxValue(maxValueToString)
    }


    const setToLocalStorageStartValue = (value: number | undefined) => {  //сохраняет в LS значение 'start value'
        let startValueToString = JSON.stringify(value)
        localStorage.setItem('start value', startValueToString)

    }
    const setToLocalStorageMaxValue = (value: number | undefined) => {     //сохраняет в LS значение 'max value'
        let maxValueToString = JSON.stringify(value)
        localStorage.setItem('max value', maxValueToString)
    }


    const getFromLocalStorage=()=>{          //закидывает значения из LS с помощью useEffect через useState в инпуты
        let startValueFromLSStringType = localStorage.getItem('start value')
        if (startValueFromLSStringType) {
            let startValueFromLS = JSON.parse(startValueFromLSStringType)
            setStartValue(startValueFromLS)
            setCount(startValueFromLS)
        }

        let maxValueFromLSStringType = localStorage.getItem('max value')
        if (maxValueFromLSStringType) {
            let maxValueFromLS = JSON.parse(maxValueFromLSStringType)
            setMaxValue(maxValueFromLS)
        }
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




