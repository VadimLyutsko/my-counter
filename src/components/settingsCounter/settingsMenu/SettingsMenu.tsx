import React, {FC} from "react";
import {SuperButton} from "../../superComponents/superButton/SuperButton";
import styles from "./settingsMenu.module.css"

type SettingsMenuPropsType={
    setToLocalStorageStartValue:(value:number | undefined)=>void
    setToLocalStorageMaxValue:(value:number | undefined)=>void
    startValue:number
    maxValue:number
}

export const SettingsMenu: FC<SettingsMenuPropsType> = ({setToLocalStorageStartValue,setToLocalStorageMaxValue,startValue,maxValue}) => {


    return (
        <div className={styles.settingsMenu}>
            <SuperButton value='set'
                         setToLocalStorageStartValue={setToLocalStorageStartValue}
                         setToLocalStorageMaxValue={setToLocalStorageMaxValue}
                         startValue={startValue}
                         maxValue={maxValue}
            />
        </div>
    )
}