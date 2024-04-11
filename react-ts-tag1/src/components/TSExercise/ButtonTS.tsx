import { ColorPalete } from "@/types/TSExerciseTypes"
import React from "react"
type ButtonTSType = {
    style:React.CSSProperties,
    handler: ()=>number,
    children: React.JSX.Element
}


const buttonTextOptions = [
    "click mich",
    "hallo", 
    "bestellt"
] as const

const ButtonTS = ({ style, handler, children }: ButtonTSType) => {

    return (
        <button onClick={handler} style={style}>
            {buttonTextOptions.map((option)=>{
                return option
            })}
        </button>
    )
}

export default ButtonTS
