import React, {FC} from "react";
import {CounterMenu} from "./counterMenu/CounterMenu";
import {CounterTabloid} from "./counterTabloid/CounterTabloid";
import styles from "./CounterContainer.module.css"

type CounterContainerPropsType = {
    count: number
    resetCount: () => void
    incCount: () => void
}


export const CounterContainer: FC<CounterContainerPropsType> = ({count, resetCount, incCount}) => {


    return (
        <div className={styles.CounterContainer}>
            <CounterTabloid
                count={count}
            />
            <CounterMenu
                resetCount={resetCount}
                incCount={incCount}
            />
        </div>
    )
}