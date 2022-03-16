import React, {FC} from "react";

type SuperButtonPropsType ={
    value:string
    incCounterHandler?:()=>void
    resetCounterHandler?:()=>void
}

export const SuperButton:FC<SuperButtonPropsType> = ({value,incCounterHandler,resetCounterHandler}) => {
    return (
        <button onClick={incCounterHandler?incCounterHandler:resetCounterHandler}>{value}</button>
    )
}