import React from 'react'

interface buttonProps {
    text:string,
    onClick : () => void,
}

const Button = (props:buttonProps) => {
    const {text,onClick}= props
    return (
        <button onClick={onClick}>
            {text}
        </button>
    )
}

export default Button