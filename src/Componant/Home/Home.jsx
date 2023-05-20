import React from 'react'
import Bannar from '../Bannar/Bannar';
import Gallery from '../Gallery/Gallery';
import News from '../News/News';
import Tabse from '../Tabse/Tabse'
import TextBox from '../TextBox/TextBox';

const Home = () => {
    return (
        <div>
           <Bannar></Bannar>
           <Gallery></Gallery>
           <News></News>
           <Tabse></Tabse>
           <TextBox></TextBox>
        </div>
    );
};

export default Home;