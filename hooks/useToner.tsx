import React, { useState } from 'react'



const useToner = (firstVaule:number) => {
    const [tonerValue,setTonerValue] = useState<number>(firstVaule);
    const increase = () => {
        setTonerValue(prevValue =>  prevValue + 1);
    }
    const decrease = () => {
        if(tonerValue > 1) {
            setTonerValue(prevValue =>  prevValue - 1);
        }
    }
    return {
        increase,
        decrease,
        value:tonerValue,
    }
}

export default useToner