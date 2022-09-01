import { useContext } from 'react';
import { MovieContext } from '../context/DataContext';
import Card from './Card'
import { v4 as uuid } from "uuid";

function CardContainer() {
    const [data] = useContext(MovieContext)
    
    // console.log(data.results[0])
    return ( 
        <div className='background'>
        <div className="cardContainer"style={{margin:'0 auto',display:'flex', flexWrap:'wrap', width:'80%',justifyContent:'space-around', alignItems:'center',gap:'30px',padding:'1%'}}>
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