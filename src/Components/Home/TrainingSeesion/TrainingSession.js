import React from 'react';
import modelOne from "../../Image & Icon/bruce-mars-gJtDg6WfMlQ-unsplash.png"
import modelTwo from "../../Image & Icon/arthur-edelman-qfjuh4OLdxw-unsplash.jpg"
import "./style.css";
import { Link } from 'react-router-dom';
const TrainingSession = () => {
    return (
        <div className="container mt-5">
          <h1 className="text-center text-bolder mb-3">OUR TRAINING <span style={{color:"#ffe227"}}> PROGRAMS</span> </h1>
        <div className="d-flex row justify-content-sm-center justify-content-md-center">
          <div class="background-imageOne" 
        className="col-md-6 img-fluid">
          <img class="img-fluid"  style={{
             position: "relative",
             textAlign: "center",
             color: "white",
             height:"25rem"
          }} src={modelOne} alt=""/>
          <div class="bottom-left"   style={{
              backgroundColor:"#ffe227",
              color:"black",
              textAlign:"center",
              height:"3rem",
              width:"19rem",
              fontSize:'1.2rem',
              fontWeight:"bold",
              border:"2px solid #ffe227",
              textAlign: "left",
              border:"5px solid yellow"
          }}> <Link style={{color:"black"}} to="/classes"> Yoga Training Session --> </Link> </div>
          </div>


          <div class="background-imageOne" 
        className="col-md-6 img-fluid">
          <img class="img-fluid"  style={{
             position: "relative",
             
             color: "white",
             height:"25rem",
             
            
          }} src={modelTwo} alt=""/>
          
          <div class="bottom-left"   style={{
              backgroundColor:"#ffe227",
              color:"black",
              textAlign:"left",
              height:"3rem",
              width:"19rem",
              border:"2px solid #ffe227",
              fontSize:'1.2rem',
              fontWeight:"bold",
              border:"5px solid yellow"
          }}> <Link style={{color:"black", cursor:"pointer"}} to="/classes"> Cardio Training Session --> </Link>  </div>
          </div>
          
          
        </div>
      </div>
    );
};

export default TrainingSession;


