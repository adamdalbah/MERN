import React, {useState} from 'react';
import Button from '@material-ui/core/Button';


const MyComponent = () => {
    const tabs = ["Tab 1", "Tab 2", "Tab 3"];
    const [msg, setMsg] = useState("");

    const clickhandler = (e, value, index) => {
        e.preventDefault();
        setMsg(value + " was tabed");
    }

    return (
        <div>
            {
                tabs.map((value, index) =>
                <Button variant="contained" color="primary" key={index} onClick={e => clickhandler(e,value,index)}>
                    {value}
                </Button>   
                )
            }
            <p>{msg}</p>
        </div>
    )
}

export default MyComponent;

