import React, {useState} from 'react'

const Box = (props) => {
    const [color, setColor] = useState("");
    
    const addBox = (e) => {
        props.addArray(color);
        e.preventDefault();
    }
    
    return (
        <div>
            <form onSubmit={addBox}>
                <p>Color <input type="text" value={color} onChange={(e) => setColor(e.target.value)} /></p>
                <input type="submit"  value="ADD"/>
            </form>    
        </div>
    )
}

export default Box

