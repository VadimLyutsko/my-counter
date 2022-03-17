import React, {ChangeEvent, FC} from "react";
import styles from "./settingsTabloid.module.css"

type SettingsTabloidPropsType = {
    setMaxCount: (maxCount: number) => void
    setStartCount: (startCount: number) => void
    maxCount: number
    startCount: number
}


export const SettingsTabloid: FC<SettingsTabloidPropsType> = ({
                                                                  setMaxCount,
                                                                  setStartCount,
                                                                  maxCount,
                                                                  startCount
                                                              }) => {


    const maxCountInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setMaxCount(JSON.parse(event.currentTarget.value))

    }

    const startCountInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setStartCount(JSON.parse(event.currentTarget.value))
    }


    return (
        <div className={styles.counterTabloid}>
                <span style={{fontWeight: "bold"}}>
                <input
                    className={styles.inp}
                    value={maxCount}
                    onChange={maxCountInputHandler}
                    type="number"
                    placeholder="Max"
                    style={(startCount >= maxCount) ?
                        {backgroundColor: "red"} :
                        {color: "black",}}
                />max value
                </span>
            <span style={{fontWeight: "bold"}}><input
                className={styles.inp}
                value={startCount}
                onChange={startCountInputHandler}
                type="number"
                placeholder="Start"
                style={(startCount >= maxCount) ?
                    {backgroundColor: "red"} :
                    {color: "black"}}
            />start value</span>


        </div>
    )
}