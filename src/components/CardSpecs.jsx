import { useContext, useEffect, useState } from "react";
import { SelectedContext } from "../context/SelectedContext";


function CardSpecs() {
    const [select, setSelect] = useContext(SelectedContext);
    const [current, setCurrent]= useState([]);
    const handleClick=(e)=>{
        e.preventDefault();
        setSelect([]);
    }
    useEffect(()=>{
        fetch(`https://api.watchmode.com/v1/title/${select.identifier}/details/?apiKey=uwW5MdNaS7aIezcu6UaMANkRibzIUF4bFZxpdBGp&append_to_response=sources`)
    .then(response=> response.json())
    .then(data=>{setCurrent(data)})
    },[])
    
    return ( 
        <div>
            <button onClick={handleClick}>X</button>
           <h1>{current.title}</h1>
            <img src={current.backdrop} alt="" />
            <span>{current.plot_overview}</span>
        </div>
     );
}

export default CardSpecs;
