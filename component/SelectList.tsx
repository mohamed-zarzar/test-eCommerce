import React, { ReactNode } from 'react'

interface selectListProps {
    children :  ReactNode;
    onChang? : (e:React.ChangeEvent<HTMLSelectElement>)=> void,
}

const SelectList = ({children,onChang}:selectListProps) => {
    return (
        <select onChange={onChang}>
            {children}
        </select>
    )
}

export default SelectList