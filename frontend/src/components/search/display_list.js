import React, { useState, useEffect } from "react";
import "./display_list.css";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Display_list = () => {
  const history = useHistory();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/all_movies", {
      method: "GET"
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.data);
      });
  }, []);

  return (
    <div className="display-list-container">
      <h1>Available</h1>
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
              <td colSpan="3">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Display_list;
