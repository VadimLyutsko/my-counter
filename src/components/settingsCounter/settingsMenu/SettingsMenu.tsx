import React, {FC} from "react";
import {SuperButton} from "../../superComponents/superButton/SuperButton";
import styles from "./settingsMenu.module.css"

type SettingsMenuPropsType = {
    saveNewStartCount: () => void
    setToLocalStorageStartValue: (value: number | undefined) => void
    setToLocalStorageMaxValue: (value: number | undefined) => void
    startValue: number
    maxValue: number
}

export const SettingsMenu: FC<SettingsMenuPropsType> = ({
                                                            saveNewStartCount,
                                                            setToLocalStorageStartValue,
                                                            setToLocalStorageMaxValue,
                                                            startValue,
                                                            maxValue
                                                        }) => {


    return (
        <div className={styles.settingsMenu}>
            <SuperButton value='set'
                         saveNewStartCount={saveNewStartCount}
                         setToLocalStorageStartValue={setToLocalStorageStartValue}
                         setToLocalStorageMaxValue={setToLocalStorageMaxValue}
                         startValue={startValue}
                         maxValue={maxValue}
            />
        </div>
    )
}