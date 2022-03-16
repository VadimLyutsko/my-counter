import React, {FC} from "react";

type SuperButtonPropsType ={
    value:string
}

export const SuperButton:FC<SuperButtonPropsType> = ({value}) => {
    return (
        <button>{value}</button>
    )
}