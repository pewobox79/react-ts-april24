export type ColorPalete = "red" | "yellow" | "blue"

export type ButtonTSType = {
    bgColor: ColorPalete
}


interface ButtonProp{
    type: "button" | "submit"
    color: ColorPalete
}


export interface VideoButton extends ButtonProp{
    size: "2rem" | "4rem"
}