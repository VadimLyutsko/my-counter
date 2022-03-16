import React from "react";
import {CounterMenu} from "./counterMenu/CounterMenu";
import {CounterTabloid} from "./counterTabloid/CounterTabloid";
import styles from "./CounterContainer.module.css"

export const CounterContainer = () => {
    return (
        <div className={styles.CounterContainer}>

            <CounterTabloid/>
            <CounterMenu/>
        </div>
    )
}