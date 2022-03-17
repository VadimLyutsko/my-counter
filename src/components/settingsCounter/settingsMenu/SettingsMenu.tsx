import React, {FC} from "react";
import {SuperButton} from "../../superComponents/superButton/SuperButton";
import styles from "./settingsMenu.module.css"

type SettingsMenuPropsType = {
    setToLocalStorage: () => void
}


export const SettingsMenu: FC<SettingsMenuPropsType> = ({setToLocalStorage}) => {
    return (
        <div className={styles.settingsMenu}>
            <SuperButton setToLocalStorage={setToLocalStorage} value="Set"/>
        </div>
    )
}