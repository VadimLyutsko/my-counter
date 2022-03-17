import React, {FC} from "react";
import {SuperButton} from "../../superComponents/superButton/SuperButton";
import styles from "./CounterMenu.module.css"

type CounterMenuPropsType = {
    resetCounterHandler: () => void
    incCounterHandler: () => void
    count: number
    startCount: number
    maxCount: number
}

export const CounterMenu: FC<CounterMenuPropsType> = ({
                                                          incCounterHandler,
                                                          resetCounterHandler,
                                                          startCount,
                                                          count
                                                      }) => {


    return (
        <div className={styles.counterMenu}>
            <SuperButton value="Inc" incCounterHandler={incCounterHandler} count={count}/>
            <SuperButton value="Reset" resetCounterHandler={resetCounterHandler} startCount={startCount} count={count}/>
        </div>
    )
}