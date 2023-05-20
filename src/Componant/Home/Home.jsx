import React from 'react'
import Bannar from '../Bannar/Bannar';
import Gallery from '../Gallery/Gallery';
import News from '../News/News';
import Tabse from '../Tabse/Tabse'

const Home = () => {
    return (
        <div>
           <Bannar></Bannar>
           <Gallery></Gallery>
           <News></News>
           <Tabse></Tabse>
        </div>
    );
};

export default Home;