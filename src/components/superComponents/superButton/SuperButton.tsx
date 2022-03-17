import React, {FC, useState} from "react";
import styles from "./superButton.module.css"

type SuperButtonPropsType = {
    value: string
    incCounterHandler?: () => void
    resetCounterHandler?: () => void
    setToLocalStorage?: () => void
    getFromLocalStorage?: () => void
    count?: number
}

export const SuperButton: FC<SuperButtonPropsType> = ({
                                                          value,
                                                          count,
                                                          incCounterHandler,
                                                          resetCounterHandler,
                                                          setToLocalStorage,
                                                          getFromLocalStorage
                                                      }) => {




    return (
        <button className={value === "Set" ? styles.superButtonSet : styles.superButtonIncRes}
                disabled={!count && value === 'Reset'}
                onClick={() => {
                    incCounterHandler && incCounterHandler() ;
                    resetCounterHandler && resetCounterHandler() ;
                    setToLocalStorage && setToLocalStorage() ;
                    getFromLocalStorage && getFromLocalStorage()
                }}>
            {value}
        </button>
    )
}

//onClick = {() => {сюда пихай что хочешь}}

