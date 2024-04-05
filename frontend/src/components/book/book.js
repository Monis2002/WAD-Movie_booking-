import React, { useState } from "react";
import "./book.css";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Book = () => {
    const [ticket, setTicket] = useState({
        name: "",
        seat: "",
        time: ""
    });
    const history = useHistory();

    // Function to handle form input changes
    const handleChange = e => {
        const { name, value } = e.target;
        setTicket({
            ...ticket,
            [name]: value
        });
    };

    // Function to submit form
    async function submit(e) {
        e.preventDefault();
        try {
            await axios.post("http://localhost:3000/booking", ticket)
                .then(res => {
                    if (res.data === 'Yes') {
                        alert("Booking is successful");
                    } else if (res.data === "No") {
                        alert("Currently, the movie is not available /  seats are full");
                    }
                });
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="book-container">
            <h1>Book a Show</h1>
            <div>
                <form onSubmit={submit} className="book-form">
                    <input type='text' name="name" value={ticket.name} placeholder="Enter the Name of the Movie" onChange={handleChange} />
                    <input type="number" name="seat" value={ticket.seat} placeholder="Number of seats" onChange={handleChange} />
                    <input type="time" name="time" value={ticket.time} placeholder="Time" onChange={handleChange} />
                    <input type="submit" value="Submit" className="submit-button" />
                </form>
            </div>
        </div>
    );
}

export default Book;
