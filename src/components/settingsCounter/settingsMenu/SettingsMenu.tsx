import React, {FC} from "react";
import {SuperButton} from "../../superComponents/superButton/SuperButton";
import styles from "./settingsMenu.module.css"
type SettingsMenuPropsType={
    setToLocalStorage:()=>void
    getFromLocalStorage:()=>void
}


export const SettingsMenu:FC<SettingsMenuPropsType> = ({setToLocalStorage,getFromLocalStorage}) => {
    return (
        <div className={styles.settingsMenu}>
            <SuperButton setToLocalStorage={setToLocalStorage} getFromLocalStorage={getFromLocalStorage} value ="Set"/>
        </div>
    )
}