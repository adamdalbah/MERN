import React from 'react';

const Inversion = props => {
    const{fName, lName, age, hColor} = props;
    return (
        <div>
            <h1>{fName}, {lName}</h1>
            <p>Age: {age}</p>
            <p>Hair Color: {hColor}</p>
        </div>
    );
}
export default Inversion;