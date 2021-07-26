import React from 'react'

const DisNumber = (props) => {
    const {id} = props;
    
    return (
        <div>
            {isNaN(props.id) ? <h1>the word is:{id}</h1> : <h1>The Number is: {id}</h1>}
        </div>
    )
}

export default DisNumber
