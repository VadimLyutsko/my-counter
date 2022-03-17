import React, {FC} from "react";
import {SettingsTabloid} from "./settingsTabloid/SettingsTabloid";
import {SettingsMenu} from "./settingsMenu/SettingsMenu";
import styles from "./SettingsContainer.module.css"

type SettingsCounterContainerPropsType = {
    setMaxCount: (maxCount: number) => void
    setStartCount: (startCount: number) => void
    setToLocalStorage: () => void
    maxCount: number
    startCount: number
}

export const SettingsCounterContainer: FC<SettingsCounterContainerPropsType> = ({
                                                                                    setMaxCount,
                                                                                    setStartCount,
                                                                                    setToLocalStorage,
                                                                                    maxCount,
                                                                                    startCount
                                                                                }) => {


    return (
        <div className={styles.settingsContainer}>
            <SettingsTabloid
                setMaxCount={setMaxCount}
                setStartCount={setStartCount}
                startCount={startCount}
                maxCount={maxCount}
            />
            <SettingsMenu
                setToLocalStorage={setToLocalStorage}


            />
        </div>
    )
}