import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchForm = props => {
    const navigate = useNavigate();
    // const [inputInfo, setInputInfo] = useState("")
    const[type, setType] = useState("planets");
    const[swId, setSwId] = useState(0); 
    const fetchInfo = e => {
        e.preventDefault();
        console.log(type, swId)
        navigate(`/${type}`)
        props.handler({type, swId});
    }

    return(
        <div>
            <form onSubmit={fetchInfo}>
                <div className="d-flex justify-content-evenly pt-5 mb-3">
                    <h1>
                        <label htmlFor="type">Search </label>
                    </h1>
                    <select className="w-50 pl-3" name="type" onChange={(e) => setType(e.target.value)}>
                        <option value="planets">Planets</option>
                        <option value="people">People</option>
                    </select>
                </div>
                <div className="d-flex justify-content-evenly pt-5 mb-1">
                    <h1>
                    <label htmlFor="Id">#</label>
                    </h1>
                    <input className="w-50" type="number" name="swId" onChange={(e) => setSwId(e.target.value)} />
                </div>
                <div className="pt-4 text-center"> 
                    <input type="submit" value="Search" className="btnblue"/>
                </div>
            </form>
        </div>
    )
}

export default SearchForm;