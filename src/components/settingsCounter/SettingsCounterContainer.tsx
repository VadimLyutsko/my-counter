import React, {FC} from "react";
import {SettingsTabloid} from "./settingsTabloid/SettingsTabloid";
import {SettingsMenu} from "./settingsMenu/SettingsMenu";
import styles from "./SettingsContainer.module.css"

type SettingsCounterContainerPropsType = {
    setMaxCount: (maxCount: number) => void
    setStartCount: (startCount: number) => void
    setToLocalStorage:()=>void
    getFromLocalStorage:()=>void
}

export const SettingsCounterContainer: FC<SettingsCounterContainerPropsType> = ({setMaxCount, setStartCount,setToLocalStorage,getFromLocalStorage}) => {


    return (
        <div className={styles.settingsContainer}>
            <SettingsTabloid
                setMaxCount={setMaxCount}
                setStartCount={setStartCount}
            />
            <SettingsMenu
                setToLocalStorage={setToLocalStorage}
                getFromLocalStorage={getFromLocalStorage}
            />
        </div>
    )
}