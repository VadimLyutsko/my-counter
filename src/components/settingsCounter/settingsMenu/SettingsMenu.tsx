import React from "react";
import {SuperButton} from "../../superComponents/superButton/SuperButton";
import styles from "./settingsMenu.module.css"

export const SettingsMenu = () => {
    return (
        <div className={styles.settingsMenu}>
            <SuperButton value ="Set"/>
        </div>
    )
}