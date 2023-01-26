import {ChangeEventHandler} from "react";

export interface InputProps{
    value?:any,
    type?:string,
    placeholder?:string,
    name?:string,
    onChange?:ChangeEventHandler<HTMLInputElement>
}