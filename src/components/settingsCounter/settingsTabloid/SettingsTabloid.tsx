import React, {ChangeEvent, FC} from "react";
import styles from "./settingsTabloid.module.css"

type SettingsTabloidPropsType = {
    setMaxCount: (maxCount: number) => void
    setStartCount: (startCount: number) => void
}


export const SettingsTabloid: FC<SettingsTabloidPropsType> = ({setMaxCount, setStartCount}) => {

    const maxCountInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setMaxCount(JSON.parse(event.currentTarget.value))

    }

    const startCountInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setStartCount(JSON.parse(event.currentTarget.value))
    }

    return (
        <div className={styles.counterTabloid}>
            Settings*
            <div><input onChange={maxCountInputHandler} type="number" placeholder="Max"/></div>
            <div><input onChange={startCountInputHandler} type="number" placeholder="Start"/></div>


        </div>
    )
}