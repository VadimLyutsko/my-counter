import React, {ChangeEvent, FC} from "react";
import styles from "./settingsTabloid.module.css"

type SettingsTabloidPropsType = {
    setStateToStartValue: (value: string) => void
    setStateToMaxValue: (value: string) => void
    startValue:number
    maxValue:number
}

export const SettingsTabloid: FC<SettingsTabloidPropsType> = ({setStateToStartValue, setStateToMaxValue,startValue,maxValue}) => {

    const onChangeStartValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setStateToStartValue(event.currentTarget.value)
    }
    const onChangeMaxValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setStateToMaxValue(event.currentTarget.value)
    }


    return (
        <div className={styles.counterTabloid}>
            <span><input value={maxValue}  className={styles.inp} type="number" onChange={onChangeMaxValueHandler} placeholder='max'/>max value</span>
            <span><input value={startValue} className={styles.inp} type="number" onChange={onChangeStartValueHandler} placeholder='start'/>start value</span>

        </div>
    )
}