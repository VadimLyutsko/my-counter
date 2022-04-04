import React, {FC} from "react";
import {SuperButton} from "../../superComponents/superButton/SuperButton";
import styles from "./CounterMenu.module.css"

type CounterMenuPropsType = {
    incCount?: () => void
    resetCount?: () => void
}

export const CounterMenu: FC<CounterMenuPropsType> = ({incCount, resetCount}) => {


    return (
        <div className={styles.counterMenu}>
            <SuperButton value='inc' incCount={incCount}/>
            <SuperButton value='reset' resetCount={resetCount}/>
        </div>
    )
}