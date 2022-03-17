import React, {FC} from "react";
import {SuperButton} from "../../superComponents/superButton/SuperButton";
import styles from "./settingsMenu.module.css"

type SettingsMenuPropsType = {
    setToLocalStorage: () => void
    startCount: number
    maxCount: number
}


export const SettingsMenu: FC<SettingsMenuPropsType> = ({
                                                            setToLocalStorage,
                                                            startCount,
                                                            maxCount
                                                        }) => {


    return (
        <div className={styles.settingsMenu}>
            <SuperButton
                setToLocalStorage={setToLocalStorage}
                value="Set"
                startCount={startCount}
                maxCount={maxCount}
            />
        </div>
    )
}