import React from 'react'
interface selectProp {
    text:string,
    value:string,
}

const Select = (props:selectProp) => {
    const {text,value}=props;
    return (
        <option value={value}>
            {text}
        </option>
    )
}

export default Select