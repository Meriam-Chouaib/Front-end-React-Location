import React from 'react';
import {InputProps} from "../../interfaces/Input";

const Input: React.FC<InputProps> = ({

                                         value,
                                         type,
                                         placeholder,
                                         onChange,
                                         name
                                     }) => {
    return (
        <>
            <input type={type} placeholder={placeholder} name={name}
                   value={value}
                   onChange={onChange}
            />
        </>
    );
}

export default Input;