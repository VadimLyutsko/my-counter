import React from "react";
import {SuperButton} from "../../superComponents/superButton/SuperButton";
import styles from "./CounterMenu.module.css"
export const CounterMenu = () => {
    return (
        <div className={styles.counterMenu}>
            <SuperButton value ="Inc"/>
            <SuperButton value ="Reset"/>
        </div>
    )
}