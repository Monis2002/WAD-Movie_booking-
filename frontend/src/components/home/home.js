import React from "react";
import "./home.css";
import { useHistory } from "react-router-dom";

const Home = () => {
    const history = useHistory();

    const handleAvailableShowsClick = () => {
        history.push("/display_list");
    };

    const handleBookAShowClick = () => {
        history.push("/book");
    };

    return (
        <div className="home-container">
            <h1 className="home-heading">Home</h1>
            <form className="button-container">
                <div className="button-group">
                    <div className="button-wrapper">
                        <img src={require("./home_img.jpg")} alt="Image 1" className="button-image" />
                        <button type="button" className="button" onClick={handleAvailableShowsClick}>Available Shows</button>
                    </div>
                </div>
                <div className="button-group">
                    <div className="button-wrapper">
                        <img src={require("./home_img.jpg")} alt="Image 2" className="button-image" />
                        <button type="button" className="button button-right" onClick={handleBookAShowClick}>Book a Show</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Home;
