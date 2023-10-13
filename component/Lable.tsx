import React from 'react'

interface lableProps {
    text:string,
}

const Lable = ({text}:lableProps) => {
    return (
        <label>{text}</label>
    )
}

export default Lable