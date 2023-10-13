import React, { ReactNode } from 'react'

interface listProps {
    children: ReactNode,
}


const List = ({children}:listProps) => {
    return (
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"center",padding:"10px",margin:"30px auto"}}>
            {children}
        </div>
    )
}

export default List