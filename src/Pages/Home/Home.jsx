import React from 'react';
import Banner from '../Banner';
import Newsletter from './newsletter';
import Recentblog from './Recentblog';
// import Recentblog from './Recentblog';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Recentblog></Recentblog>
            <Newsletter></Newsletter>
         

        </div>
    );
};

export default Home;