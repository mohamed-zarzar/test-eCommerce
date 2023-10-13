import React from 'react'

interface chipProps {
    value:string,
    backgroundColor:string,
}

const Chip = (props:chipProps) => {
    const {value,backgroundColor} = props;
    return (
        <div style={{background:backgroundColor,borderRadius:"5px",textAlign:"center"}}>
            {value}
        </div>
    )
}

export default Chip