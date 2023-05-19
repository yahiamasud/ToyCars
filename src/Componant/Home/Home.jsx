import React from 'react'
import Bannar from '../Bannar/Bannar';
import Gallery from '../Gallery/Gallery';
import Tabs from '../Tabs/Tabs';
import News from '../News/News';

const Home = () => {
    return (
        <div>
           <Bannar></Bannar>
           <Gallery></Gallery>
           <News></News>
           <Tabs></Tabs>
        </div>
    );
};

export default Home;