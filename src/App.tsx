import React from 'react';
import './App.css';
import {CounterContainer} from "./components/counter/CounterContainer";
import {SettingsCounterContainer} from "./components/settingsCounter/SettingsCounterContainer";

function App() {
    return (
        <div className="App">
            <SettingsCounterContainer/>
            <CounterContainer/>
        </div>
    );
}

export default App;
