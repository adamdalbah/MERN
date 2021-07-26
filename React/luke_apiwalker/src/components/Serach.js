import React, {useState} from 'react'
import { navigate } from '@reach/router'

const Serach = (props) => {
    const [id,setId]=useState("")
    const titles = [
        'people',
        'planets'
    ]
    const [selectedTitle, setSelectedTitle] = useState(titles[0]) 

    const addTitle= (e) => {
        setSelectedTitle(e.target.value);
    }

    const addId= (e) => {
        setId( e.target.value);  
    }

    const handleSearch = (e) => {
        e.preventDefault();
        props.addTitleId(selectedTitle, id);
    }
    return (
        <div>
            <form onSubmit={handleSearch}>
                <label>Search for: </label>
                <select value={selectedTitle} onChange={addTitle}>
                    {titles.map((title, index) => (
                        <option  key={index} value={title}>{title}</option>
                    ))}
                </select>
                <input type="number" onChange={addId}/>
                <input type="submit" value="Search"/>
            </form>
        </div>
    )
}

export default Serach
