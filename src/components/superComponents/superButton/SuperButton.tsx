import React, {FC} from "react";
import styles from "./superButton.module.css"

type SuperButtonPropsType = {
    incCount?: () => void
    resetCount?: () => void
    value: 'set' | 'inc' | 'reset'
    saveNewStartCount?:()=>void
    setToLocalStorageStartValue?: (value: number | undefined) => void
    setToLocalStorageMaxValue?: (value: number | undefined) => void
    startValue?: number
    maxValue?: number
}

export const SuperButton: FC<SuperButtonPropsType> = ({saveNewStartCount,
                                                          incCount,
                                                          resetCount,
                                                          value,
                                                          setToLocalStorageStartValue,
                                                          setToLocalStorageMaxValue,
                                                          startValue,
                                                          maxValue

                                                      }) => {


    return (
        <button
            className={value === 'set' ? styles.superButtonSet : styles.superButtonIncRes}
            onClick={() => {
                saveNewStartCount&&saveNewStartCount()
                incCount && incCount()
                resetCount && resetCount()
                setToLocalStorageStartValue && setToLocalStorageStartValue(startValue)
                setToLocalStorageMaxValue && setToLocalStorageMaxValue(maxValue)
            }}
        >
            {value}
        </button>
    )
}

//onClick = {() => {сюда пихай что хочешь}}

