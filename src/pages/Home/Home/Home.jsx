import React from 'react';
import Banner from '../Banner/Banner';
import Works from '../HowitWorks/Works';
import Brands from '../Brands/Brands';
import Support from '../Support/Support';
import Reviews from '../Reviews/Reviews';

const reviewsPromise = fetch('/reviews.json').then(res => res.json());

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Works></Works>
           <Brands></Brands>
           <Support></Support>
           <Reviews reviewsPromise={reviewsPromise}></Reviews>
        </div>
    );
};

export default Home;