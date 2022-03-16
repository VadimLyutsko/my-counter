import React from "react";
import {SettingsTabloid} from "./settingsTabloid/SettingsTabloid";
import {SettingsMenu} from "./settingsMenu/SettingsMenu";
import styles from "./SettingsContainer.module.css"

export const SettingsCounterContainer = () => {
    return (
        <div className={styles.settingsContainer}>
            <SettingsTabloid/>
            <SettingsMenu/>
        </div>
    )
}