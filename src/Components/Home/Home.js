import React from 'react';
import AboutUs from './AboutUs/AboutUs';
import ChooseUs from './ChooseUs/ChooseUs';
import Footer from './Footer/Footer';
import Items from './Items/Items';

import JoinUsAndHeader from './JoinUsAndHeader/JoinUsAndHeader';
import TrainingSession from './TrainingSeesion/TrainingSession';

const Home = () => {
    return (
        <div style={{overflowX: "hidden"}}>
            <JoinUsAndHeader/>  
            <Items/>
            <AboutUs/>
            <TrainingSession/>
            <ChooseUs/>
            <Footer/>
        </div>
    );
};

export default Home;