import React from 'react';
import NavigationBar from '../header-and-footer/Navigationbar';
import { Outlet } from 'react-router-dom';
import Footer from '../header-and-footer/Footer';

const Main = () => {
    return (
        <div className='relative '>
           <div className="sticky top-0 w-full z-10">
           <NavigationBar></NavigationBar>
            </div> 
           <div className='mb-20'>
           <Outlet></Outlet>
           </div>
           <div className="fixed bottom-0 w-full ">
           <Footer></Footer>
           </div>
        </div>
    );
};

export default Main;