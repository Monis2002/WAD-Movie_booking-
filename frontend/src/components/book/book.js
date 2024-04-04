import React,{useState} from "react"
import "./book.css"
import { useHistory } from "react-router-dom";
import axios from "axios";


const Book=()=>{

    const [ticket,setticket]=useState({
        name:"",
        seat:"",
        time:""
    })
    const history = useHistory();
    // Function
    const handleChange=e=>{
           
        const {name,value}=e.target
        setticket({
                ...ticket,
                [name]:value
            })
           
        }

    async function submit(e){
        e.preventDefault();
        try{
            await axios.post("http://localhost:3000/booking",ticket)
            .then(res=>{
                if(res.data=='Yes'){
                    alert("Booking is successull")
                    
                }
                else if(res.data=="No"){
                    alert("Currently Movie is not available")
                }
            })
        }
        catch(e){
            console.log(e)
        }

    }        
    return (
        <div>
      <h1>Book a Show</h1>
      <div>
        <form onSubmit={submit}>
          <input type='text' name="name" value={ticket.name} placeholder="Enter the Name of the Movie" onChange={handleChange} />
          <input type="number" name="seat" value={ticket.seat} placeholder="Number of seats" onChange={handleChange} />
          <input type="time" name="time" value={ticket.time} placeholder="Time" onChange={handleChange} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
    )
}

export default Book