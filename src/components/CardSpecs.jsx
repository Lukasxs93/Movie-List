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
        fetch(`https://api.watchmode.com/v1/title/${select.identifier}/details/?apiKey=Canjq39hADEvqSkrwKTtx3aypnOL4l9yBX42k4zM&append_to_response=sources`)
    .then(response=> response.json())
    .then(data=>{
        const key = 'source_id';
        const arrayUniqueByKey = [...new Map(data.sources.map(item =>
            [item[key], item])).values()];
         
         const newData ={single_sources:arrayUniqueByKey, ...data}
         return newData
    }).then(newData=> {setCurrent(newData)})
       

       

    },[])
     
    
    return ( 
        <div className="cardSpecs">
        <button className="closeButton" onClick={handleClick}>X</button>
        <div>
            <h1>{current.title}</h1>
            <img src={current.backdrop} alt="Movie banner" />
        </div>
        <div>
            <p>{current.plot_overview}</p>
            <br />
            <p>you can find it on :</p>
            <div>{current.single_sources?.map(source=><a href={source.web_url} target='blank' key={source.source_id}><p>{source.name}</p></a>)}</div>
        </div>
        
    </div>
     );
}

export default CardSpecs;
