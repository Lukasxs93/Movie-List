import CardContainer from "./CardContainer";
import SearchBar from "./SearchBar";
import MovieContextProvider from "../context/DataContext";
import { useContext } from "react";
import { SelectedContext } from "../context/SelectedContext";
import CardSpecs from "./CardSpecs";
import Header from "./Header";
import RandomButton from "./RandoomButton";



function PageWrapper() {
   const [select] = useContext(SelectedContext)
  
    return ( 
        <div className="pageWrapper">
        <Header/>
        <MovieContextProvider>
            
            {select.length !== 0 ? 
             <CardSpecs/>
           
            

            :
            <div>
                <div className="titleWrapper">
                <h1 className="title">Find your next favourite</h1>
                <p className="subtitle">search a <bold>movie</bold> or <bold>series</bold> to add to your watch list</p>
                
                  <div className="searchWrapper">
                  <SearchBar/>
                  <p>or</p>
                  <RandomButton/>
                  </div>
                </div>
                <CardContainer/> 
               
           </div>
               
            }
                
                        
        </MovieContextProvider>
                
       </div>     
           
        
     );
}

export default PageWrapper;