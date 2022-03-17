import React, {FC} from "react";
import styles from "./CounterTabloid.module.css"

type CounterTabloidPropsType = {
    count: number
    startCount: number
    maxCount: number
}


export const CounterTabloid: FC<CounterTabloidPropsType> = ({
                                                                count,
                                                                startCount,
                                                                maxCount
                                                            }) => {


    return (
        <div className={styles.counterTabloid}>
            {(startCount >= maxCount) ? "Incorrect value!" : count}

        </div>
    )
}