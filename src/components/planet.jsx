import axios from "axios";
import { useEffect, useState } from "react";


const PlanetResults = props => {
    const[planet, setPlanet] = useState(null);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${props.resultData.type}/${props.resultData.swId}`)
            .then(res => setPlanet(res.data)) 
    }, [props])
    return(
        <div>
            {
                planet ? <>
                <h1>Planet info:</h1>
                <h2><span className="text-white">Name:</span> {planet.name}</h2>
                <h2><span className="text-white">Climate:</span> {planet.climate}</h2>
                <h2><span className="text-white">Terrain:</span> {planet.terrain}</h2>
                <h2><span className="text-white">Grav Level:</span> {planet.gravity}</h2>
                <h2><span className="text-white">Pop:</span> {planet.population}</h2>
                </> : <img className="align-content-center" src="/baby-yoda-baby-yoda-soup.gif" alt="baby yoda" />
            }
        </div>
    )
}

export default PlanetResults;