import { useContext } from 'react';
import { MovieContext } from '../context/DataContext';
import Card from './Card'
import { v4 as uuid } from "uuid";

function CardContainer() {
    const [data,setData] = useContext(MovieContext)
    const handleClick=(e)=>{
        e.preventDefault();
        setData([]);
    }
    // console.log(data.results[0])
    return ( 
        <div className='background'>
         <button onClick={handleClick}>X</button>
        <div className="cardContainer"style={{display:'flex',flexWrap:'wrap',height:'max-content',justifyContent:'space-around', alignItems:'center',gap:'30px'}}>
         { data !==[] ?
           data.map((data)=>(
            <div key={uuid()} style={{display:'flex'}}>
                <Card  img = {data.image_url} name={data.name} id={data.id}/>              
            </div>
            )

            
            
           ):<></>}
        </div> 
        </div>
    );
}

export default CardContainer;