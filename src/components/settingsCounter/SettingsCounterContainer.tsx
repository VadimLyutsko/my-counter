import React, {FC} from "react";
import {SettingsTabloid} from "./settingsTabloid/SettingsTabloid";
import {SettingsMenu} from "./settingsMenu/SettingsMenu";
import styles from "./SettingsContainer.module.css"

// type SettingsCounterContainerPropsType={
//     count:number
//     setCount:(value:number)=>void
// }

export const SettingsCounterContainer:FC = () => {
    return (
        <div className={styles.settingsContainer}>
            <SettingsTabloid/>
            <SettingsMenu/>
        </div>
    )
}