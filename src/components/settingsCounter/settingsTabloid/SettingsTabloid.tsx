import React from "react";
import styles from "./settingsTabloid.module.css"

export const SettingsTabloid = () => {
    return (
        <div className={styles.counterTabloid}>
            Settings*
            <div><input type="number"/></div>
            <div><input type="number"/></div>


        </div>
    )
}