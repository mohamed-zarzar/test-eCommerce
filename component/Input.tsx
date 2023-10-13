import React from 'react'

interface inputProps {
    type: string,
    onChange?: (e:React.ChangeEvent<HTMLInputElement>) => void,
}

const Input = (props:inputProps) => {
    return (
        <input {...props}/>
    )
}

export default Input;