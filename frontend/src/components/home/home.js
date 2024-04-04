import React from "react";
import "./home.css";
import { useHistory } from "react-router-dom";

const Home = () => {
    const history = useHistory();

    return (
        <div className="home-container">
            <h1 className="home-heading">Home</h1>
            <div className="button-container">
                <div className="button" onClick={() => { history.push("/display_list") }}>Available Shows</div>
                <div className="space"></div> {/* Space between buttons */}
                <div className="button" onClick={() => { history.push("/book") }}>Book a Show</div>
            </div>
        </div>
    );
}

export default Home;
