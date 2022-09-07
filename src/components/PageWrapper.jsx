import CardContainer from "./CardContainer";
import SearchBar from "./SearchBar";
import { MovieContext } from "../context/DataContext";
import { useContext } from "react";
import { SelectedContext } from "../context/SelectedContext";
import CardSpecs from "./CardSpecs";
import Header from "./Header";
// import RandomButton from "./RandoomButton";
import hero from '../assets/hero.png';


function PageWrapper() {
   const [select] = useContext(SelectedContext)
   const [data] = useContext(MovieContext)

    return ( <>
        
        <div className="pageWrapper">
        <div className='backgroundImg'>
			     <img src={hero} alt="hero" />
	             </div>
       
        <Header/>
            {select.length !== 0 ?
            <div className="background">
                <CardSpecs/>
            </div> 
             
           
            

            :
            <div>
                {data.length !==0?
                <>
                <div className='background'></div><CardContainer/></> :
                  <>
                 
                 
                  <div className="titleWrapper">        
                  <h1 className="title">Find your next favourite</h1>
                  <p className="subtitle">search a <strong>movie</strong> or <strong>series</strong> to add to your watch list</p>
                  
                    <div className="searchWrapper">
                    <SearchBar/>
                    {/* <p>or</p>
                    <RandomButton/> */}
                    </div>
                    <a  className="watchmodeLink"href="https://www.watchmode.com/misc/servicesChooser/?didRedirect=1">Streaming data powered by Watchmode.com</a>
                  </div>
                  </>
                }
                
                 
               
           </div>
               
            }
                
                        
        
                
       </div>     
       </>  
        
     );
}

export default PageWrapper;