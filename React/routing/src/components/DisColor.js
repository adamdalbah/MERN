import React from 'react'

const DisColor = (props) => {
    const {word} = props;
    return (
        <div style={{color:props.color1, backgroundColor:props.color2}}>
            {isNaN(word) ? <h1>The word is:{word}</h1> : <h1>The Number is: {word}</h1>}
        </div>
    )
}

export default DisColor
