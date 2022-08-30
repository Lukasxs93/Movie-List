
import { useContext } from "react";
import { SelectedContext } from "../context/SelectedContext";
import Check from "./Check";



function Card({img, name,id}) {
    const [select,setSelect] = useContext(SelectedContext);
    
    const handleClick=()=>{
        setSelect({
            title:name,
            identifier: id,
            image:img
            
        })
    }
    return ( 

        <div className="card" id={id} onClick={handleClick} >
            <p>{name}</p>
            <Check/>
            <img src={img} alt="" />
            
        </div>
        
     );
}

export default Card;
