import React,{useState, useEffect} from 'react'
import axios from 'axios';
import Serach from './Serach'


const Display = (props) => {
    const{title, id} = props;
    const [responseData, setResponseData] = useState([]);

    useEffect(() =>{
        axios.get(`https://swapi.dev/api/${title}/${id}`)
        .then(response=>{setResponseData(response.data)})
        .catch(reject =>{setResponseData({error:"These aren't the droids you're looking for"})})
    },[title, id])

    return (
        <div> 
            <h2>{responseData.name}</h2>
            {props.title === "people" ? 
            <ul>
                <li>Height: {responseData.height}</li>
                <li>Mass: {responseData.mass}</li>
                <li>Hair Color: {responseData.hair_color}</li>
                <li>Skin Color: {responseData.skin_color}</li>
            </ul> :
            <ul>
            <li>Climate: {responseData.climate}</li>
            <li>Terrain: {responseData.terrain}</li>
            <li>Surface Water: {responseData.surface_water}</li>
            <li>Population: {responseData.population}</li>
        </ul>
}
        </div>
    )
}

export default Display
