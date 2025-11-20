import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/shared/Header/Header';
import Footer from '../Components/shared/Footer/Footer';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;