import React, {FC} from "react";
import styles from "./superButton.module.css"

type SuperButtonPropsType = {
    value: string
    incCounterHandler?: () => void
    resetCounterHandler?: () => void
    setToLocalStorage?: () => void
    getFromLocalStorage?: () => void
    count?: number
    startCount?: number
    maxCount?: number
}


export const SuperButton: FC<SuperButtonPropsType> = ({
                                                          value,
                                                          count,
                                                          incCounterHandler,
                                                          resetCounterHandler,
                                                          setToLocalStorage,
                                                          getFromLocalStorage,
                                                          startCount,
                                                          maxCount
                                                      }) => {


    const disButtStart = () => {
        let startCountAsString = localStorage.getItem("start value")
        if (startCountAsString) {
            return JSON.parse(startCountAsString)
        }
    }

    const disButtMax = () => {
        let maxCountAsString = localStorage.getItem("max value")
        if (maxCountAsString) {
            return JSON.parse(maxCountAsString)
        }
    }


    return (
        <button className={value === "Set" ? styles.superButtonSet : styles.superButtonIncRes}

                disabled={
                    ((count === startCount) && value === 'Reset') ||
                    ((count === maxCount) && value === 'Inc') ||
                    ((startCount === disButtStart()) && value === 'Set') &&
                    ((maxCount === disButtMax()) && value === 'Set')
                }


                onClick={() => {
                    incCounterHandler && incCounterHandler();
                    resetCounterHandler && resetCounterHandler();
                    setToLocalStorage && setToLocalStorage();
                    getFromLocalStorage && getFromLocalStorage()
                }}>
            {value}
        </button>
    )
}

//onClick = {() => {сюда пихай что хочешь}}

