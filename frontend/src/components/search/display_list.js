import React,{useState} from "react"
import "./display_list.css"
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";



const Display_list=()=>{

  const history = useHistory();

  const [movies,setmovies]=useState([])

  useEffect(()=>{
    fetch("http://localhost:3000/all_movies",{
      method:"GET"
    })
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data)
      setmovies(data.data)
    })

  },[])


    return (
      <div>
       <h1>
        available
       </h1>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Seat</td>
            <td>Time</td>
          </tr>
        </thead>
        <tbody>
          {movies.length > 0 ? (
            movies.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.seat}</td>
                <td>{item.time}</td>
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
    )
}

export default Display_list