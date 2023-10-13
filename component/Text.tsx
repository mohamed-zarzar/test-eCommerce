import React from 'react'

interface textProps {
    text: string,
}

const Text = ({text}:textProps) => {
    return (
        <p>{text}</p>
    )
}

export default Text