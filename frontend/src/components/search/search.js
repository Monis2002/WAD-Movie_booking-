import React,{useEffect, useState} from "react"

import "./search.css"
import axios from "axios"
import { useHistory } from "react-router-dom";



const Search=()=>{

  // NEW
  const [movies,setmovies]=useState([])

  useEffect(()=>{
    fetch("http://localhost:3000/temp",{
      method:"GET"
    })
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data)
      setmovies(data.data)
    })

  },[])


  // END NEW

   
    const history = useHistory();



    const [search_M,searchMovies]=useState({
          
            name:""
            
        })


    
    // Functions
    const handleChange=e=>{
           
        const {name,value}=e.target
        searchMovies({
                ...search_M,
                [name]:value
            })
           
        }

//----------------------------


    
   async function submit(e){
        e.preventDefault();
        try{
            
            await axios.post("http://localhost:3000/search",search_M)
        }
        catch(e){
            console.log(e)
        }
        
    
    }


    return (
      
        <div className="search">
            <h1>avialble shows</h1>
            <input type='text' name="name" value={search_M.name} placeholder="Enter your name" onChange={handleChange}></input>
            <div className="button" onClick={submit}>Search</div>
            {/* New Block */}
            <div>
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Seat</td>
        </tr>
      </thead>
      <tbody>
        {movies.length > 0 ? (
          movies.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.seat}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="2">No data available</td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
        </div>

        
    )
}

export default Search