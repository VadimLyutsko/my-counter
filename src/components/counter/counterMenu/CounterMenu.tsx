import React, {FC} from "react";
import {SuperButton} from "../../superComponents/superButton/SuperButton";
import styles from "./CounterMenu.module.css"

type CounterMenuPropsType = {
    count: number
    setCount: (count: number) => void
    resetCounterHandler: () => void
    incCounterHandler: () => void
}

export const CounterMenu: FC<CounterMenuPropsType> = ({count, setCount, incCounterHandler, resetCounterHandler}) => {


    return (
        <div className={styles.counterMenu}>
            <SuperButton value="Inc" incCounterHandler={incCounterHandler}/>
            <SuperButton value="Reset" resetCounterHandler={resetCounterHandler}/>
        </div>
    )
}