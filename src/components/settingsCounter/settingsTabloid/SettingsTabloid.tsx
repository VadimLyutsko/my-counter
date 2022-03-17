import React, {ChangeEvent, FC, useState} from "react";
import styles from "./settingsTabloid.module.css"

type SettingsTabloidPropsType = {
    setMaxCount: (maxCount: number) => void
    setStartCount: (startCount: number) => void
    maxCount: number
    startCount: number
}


export const SettingsTabloid: FC<SettingsTabloidPropsType> = ({setMaxCount, setStartCount, maxCount, startCount}) => {
    const maxCountInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setMaxCount(JSON.parse(event.currentTarget.value))

    }

    const startCountInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setStartCount(JSON.parse(event.currentTarget.value))
    }

    return (
        <div className={styles.counterTabloid}>
            Settings*
            <div><input
                value={maxCount}
                onChange={maxCountInputHandler}
                type="number"
                placeholder="Max"/></div>

            <div><input
                value={startCount}
                onChange={startCountInputHandler}
                type="number"
                placeholder="Start"/></div>


        </div>
    )
}