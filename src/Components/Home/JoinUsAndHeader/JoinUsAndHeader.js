import React from 'react';
import Header from '../Headers/Header';
import JoinUs from '../JoinUs/JoinUs';
import "../Home.css";
import header from "../../Image & Icon/edgar-chaparro-sHfo3WOgGTU-unsplash.jpg"
const JoinUsAndHeader = () => {
    return (
        <div   style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5) ), url(${header})`, overflow:"auto" }} class='background'>
            <Header/>
            <JoinUs/>
        </div>
    );
};

export default JoinUsAndHeader;