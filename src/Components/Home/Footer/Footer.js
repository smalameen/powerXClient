import React from 'react';
import { Link } from 'react-router-dom';
import face from "../../Image & Icon/bxl-facebook.png";
import insta from "../../Image & Icon/bxl-instagram.png";
import twitter from "../../Image & Icon/bxl-twitter.png"
import whats from "../../Image & Icon/bxl-whatsapp.png";
import yt from "../../Image & Icon/bxl-youtube.png"

const Footer = () => {
    return (
        <div style={{backgroundColor: "#000000",
        backgroundImage: `linear-gradient(315deg, #000000 0%, #414141 74%)`, color:"white"}}>
            <div className="container mt-5">
            <div className="row">
               <Link style={{color:"white"}} to="/home"> <div  className="col-md-3">
                    <h1>Power<span style={{color:"yellow"}}>X</span> </h1>

                </div>  </Link>
                <div className="col-md-9">
                    <div className="row">
                        <div className="col-md-3 mt-sm-2">
                        <h5>Need Help?</h5> 
                        <small> Live Chat</small> <br/>
                        <small> Customer Care</small> <br/>
                        <small> Gift Order</small> <br/>
                        <small> Send your feedback</small> 
                        </div>
                        <div className="col-md-3  mt-sm-2">
                        <h5>Our Digital Resources</h5>
                        <small>Articles</small> <br/>
                        <small> E-book</small>
                        </div>
                        
                        <div className="col-md-3  mt-sm-2">
                        <h5>Contact With us</h5>
                        <div className="d-flex justify-content-md-between">
                        <img className="ml-1" src={face} alt=""/>
                        <img className="ml-1" src={yt} alt=""/>
                        <img className="ml-1" src={insta} alt=""/>
                        <img className="ml-1" src={twitter} alt=""/>
                        <img className="ml-1" src={whats} alt=""/>
                        </div>

                        </div>
                        <div className="col-md-3  mt-sm-2">
                        <h5>Join Our news letter</h5>
                        <small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem commodi asperiores odio, nam distinctio soluta iste repellendus id repellat optio.</small>
                        </div>
                    </div>

                </div>
            </div>
            </div>
            <h6 style={{marginTop:"5rem"}} className="text-center p-3">All right reserved by @smalamin</h6>
        </div>
    );
};

export default Footer;