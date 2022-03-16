import React, {FC} from "react";
import {CounterMenu} from "./counterMenu/CounterMenu";
import {CounterTabloid} from "./counterTabloid/CounterTabloid";
import styles from "./CounterContainer.module.css"

type CounterContainerPropsType={
    count:number
    setCount:(count:number)=>void
}

export const CounterContainer:FC<CounterContainerPropsType> = ({count,setCount}) => {
    const incCounterHandler = () => {
        setCount(count + 1)
    }

    const resetCounterHandler = () => {
        setCount(0)
    }

    return (
        <div className={styles.CounterContainer}>

            <CounterTabloid
            count={count}
            />
            <CounterMenu
                incCounterHandler={incCounterHandler}
                resetCounterHandler={resetCounterHandler}
            setCount={setCount}
            count={count}/>
        </div>
    )
}