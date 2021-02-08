import React from 'react';
import AboutUs from './AboutUs/AboutUs';
import Items from './Items/Items';

import JoinUsAndHeader from './JoinUsAndHeader/JoinUsAndHeader';
import TrainingSession from './TrainingSeesion/TrainingSession';

const Home = () => {
    return (
        <div >
            <JoinUsAndHeader/>  
            <Items/>
            <AboutUs/>
            <TrainingSession/>
        </div>
    );
};

export default Home;