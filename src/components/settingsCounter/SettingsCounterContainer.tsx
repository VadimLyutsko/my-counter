import React, {FC} from "react";
import {SettingsTabloid} from "./settingsTabloid/SettingsTabloid";
import {SettingsMenu} from "./settingsMenu/SettingsMenu";
import styles from "./SettingsContainer.module.css"

type SettingsCounterContainerPropsType = {
    saveNewStartCount: () => void
    setStateToStartValue: (value: string) => void
    setStateToMaxValue: (value: string) => void
    setToLocalStorageStartValue: (value: number | undefined) => void
    setToLocalStorageMaxValue: (value: number | undefined) => void
    startValue: number
    maxValue: number
}

export const SettingsCounterContainer: FC<SettingsCounterContainerPropsType> = ({
                                                                                    saveNewStartCount,
                                                                                    setStateToStartValue,
                                                                                    setStateToMaxValue,
                                                                                    setToLocalStorageStartValue,
                                                                                    setToLocalStorageMaxValue,
                                                                                    startValue,
                                                                                    maxValue
                                                                                }) => {

    return (
        <div className={styles.settingsContainer}>
            <SettingsTabloid
                setStateToStartValue={setStateToStartValue}
                setStateToMaxValue={setStateToMaxValue}
                startValue={startValue}
                maxValue={maxValue}
            />
            <SettingsMenu
                setToLocalStorageStartValue={setToLocalStorageStartValue} startValue={startValue}
                setToLocalStorageMaxValue={setToLocalStorageMaxValue} maxValue={maxValue}
                saveNewStartCount={saveNewStartCount}
            />
        </div>
    )
}