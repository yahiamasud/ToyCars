import React from 'react';
import Header from '../Componant/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Componant/Footer/Footer';

const Mainloyout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Mainloyout;