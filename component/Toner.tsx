import React from 'react'
import Button from './Button'
import Text from './Text'

interface tonerProps {
    value:number,
    increase: () => void,
    decrease: () => void,
}

const Toner = (props:tonerProps) => {
    const {increase,decrease,value} = props;
    return (
        <div>
            <Button text='-' onClick={decrease}/>
            <Text text={`${value}`}/>
            <Button text='+' onClick={increase}/>
        </div>
    )
}

export default Toner