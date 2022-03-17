import React, {FC} from "react";
import {CounterMenu} from "./counterMenu/CounterMenu";
import {CounterTabloid} from "./counterTabloid/CounterTabloid";
import styles from "./CounterContainer.module.css"

type CounterContainerPropsType = {
    count: number
    setCount: (count: number) => void
    startCount: number
    maxCount: number
}

export const CounterContainer: FC<CounterContainerPropsType> = ({
                                                                    count,
                                                                    setCount,
                                                                    startCount,
                                                                    maxCount
                                                                }) => {


    const incCounterHandler = () => {
        setCount(count + 1)
    }

    const resetCounterHandler = () => {
        setCount(startCount)
    }


    return (
        <div className={styles.CounterContainer}>
            <CounterTabloid
                count={count}
                startCount={startCount}
                maxCount={maxCount}
            />
            <CounterMenu
                incCounterHandler={incCounterHandler}
                resetCounterHandler={resetCounterHandler}
                count={count}
                startCount={startCount}
                maxCount={maxCount}
            />
        </div>
    )
}