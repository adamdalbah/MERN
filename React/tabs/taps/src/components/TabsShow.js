import React from 'react';
import Button from '@material-ui/core/Button';

const TabsShow = (props) => {
    const tabs = ["Tab 1", "Tab 2", "Tab 3"];

    const clickhandler = (e, value, index) => {
        e.preventDefault();
        props.data(value + " was tabed");
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
        </div>
    )
}

export default TabsShow
