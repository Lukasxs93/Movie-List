
import { useContext } from "react";
import { SelectedContext } from "../context/SelectedContext";
import Check from "./Check";



function Card({img, name,id}) {
     // eslint-disable-next-line 
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
            
            <Check/>
            <img src={img} alt="movie poster" style={{borderRadius:'10px'}}/>
           
            
        </div>
        
     );
}

export default Card;
