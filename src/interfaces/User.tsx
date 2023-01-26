import {IIAnnonce} from "./Annonce";


export interface User{
    username:string,
    email:string,
    password:string,
    role:string[]
}
export interface UserloginProps{
    username:string,
    password:string,
    loading?: boolean,
    message?: string
}

export interface UserProps{
    username:string,
    password:string,

}
export interface IPropsFomLogin{
    onSubmitLoginUser:(e:any ) => void,



}
