import axios from "axios";
import { useEffect, useState } from "react";


const Results = props => {
    const[starwars, setStarwars] = useState(null);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${props.resultData.type}/${props.resultData.swId}`)
            .then(res => setStarwars(res.data)) 
    }, [props])
    return(
        <div>
            {
                starwars ? <>
                <h1>Person Info:</h1>
                <h2><span className="text-white">Name:</span> {starwars.name}</h2>
                <h2><span className="text-white">Height:</span> {starwars.height} cm</h2>
                <h2><span className="text-white">Weight:</span> {starwars.mass} kg</h2>
                <h2><span className="text-white">Eye Color:</span> {starwars.eye_color}</h2>
                <h2><span className="text-white">DoB:</span> {starwars.birth_year}</h2>
                </> : <img src="/baby-yoda-baby-yoda-soup.gif" alt="baby yoda" />
            }
        </div>
    )
}

export default Results;