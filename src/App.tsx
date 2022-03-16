import React, {useState} from 'react';
import './App.css';
import {CounterContainer} from "./components/counter/CounterContainer";
import {SettingsCounterContainer} from "./components/settingsCounter/SettingsCounterContainer";

function App() {
    const [count, setCount] = useState(0);



    return (
        <div className="App">
            <SettingsCounterContainer/>
            <CounterContainer
                count={count}
                setCount={setCount}
            />
        </div>
    );
}

export default App;
