import React, { ReactNode } from 'react'

interface formProp {
    children: ReactNode,
    onChange?: (e: React.FormEvent<HTMLFormElement>) => void,
}

const Form = ({children,onChange}:formProp) => {
    return (
        <form onChange={onChange}>
            {children}
        </form>
    )
}

export default Form