import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shered/Navbar';
import Footer from '../Pages/Shered/Footer';

const MainLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <div className='max-w-7xl mx-auto'>
                <Outlet></Outlet>

            </div>        
                <Footer></Footer>

        </div>
    );
};

export default MainLayout;