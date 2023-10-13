import React, { ReactNode } from 'react'

interface itemProps {
    children: ReactNode,
}

function Item({children}:itemProps) {
    return (
        <div style={{margin:"20px 10px"}}>
            {children}
        </div>
    )
}

export default Item