import React from 'react';
import Banner from '../Banner/Banner';
import Works from '../HowitWorks/Works';
import Brands from '../Brands/Brands';
import Support from '../Support/Support';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Works></Works>
           <Brands></Brands>
           <Support></Support>
        </div>
    );
};

export default Home;