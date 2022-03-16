import React, {FC} from "react";
import styles from "./CounterTabloid.module.css"

type CounterTabloidPropsType ={
    count:number
}

export const CounterTabloid:FC<CounterTabloidPropsType> = ({count}) => {
    return (
        <div className={styles.counterTabloid}>
            {count}
        </div>
    )
}