import React from "react";
import TimeLine from "../Components/TimeLine/TimeLine";
import Navbar from "../Components/TimeLine/Navbar/Navbar";

const Home = ()=>{
    return (
        <div className="home-container">
            <Navbar/>
            <TimeLine/>
        </div>
    )
}

export default Home;