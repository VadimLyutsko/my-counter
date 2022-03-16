import React, {FC} from "react";

type SuperButtonPropsType = {
    value: string
    incCounterHandler?: () => void
    resetCounterHandler?: () => void
    setToLocalStorage?: () => void
    getFromLocalStorage?:()=>void
}

export const SuperButton: FC<SuperButtonPropsType> = ({
                                                          value,
                                                          incCounterHandler,
                                                          resetCounterHandler,
                                                          setToLocalStorage,
                                                          getFromLocalStorage
                                                      }) => {
    const fix = () => {
    }

    return (
        <button onClick={() => {
            incCounterHandler ? incCounterHandler() : fix();
            resetCounterHandler ? resetCounterHandler() : fix();
            setToLocalStorage ? setToLocalStorage() : fix();
            getFromLocalStorage?getFromLocalStorage():fix()
        }}>
            {value}
        </button>
    )
}

//onClick = {() => {сюда пихай что хочешь}}

