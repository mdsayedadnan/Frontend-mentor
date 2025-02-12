import React from 'react';
import Banner from '../Banner';
import Newsletter from './newsletter';
import Recentblog from './Recentblog';
import MostDescrioption from './MostDescrioption';
import UpcomingBlogs from './UpcomingBlogs';
// import Recentblog from './Recentblog';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Recentblog></Recentblog>
            <UpcomingBlogs></UpcomingBlogs>
            <Newsletter></Newsletter>
            <MostDescrioption></MostDescrioption>
         

        </div>
    );
};

export default Home;