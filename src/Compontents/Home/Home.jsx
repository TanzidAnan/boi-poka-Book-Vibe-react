import React from 'react';
import BannerSectin from '../BannerSectin/BannerSectin';
import Books from '../Books/Books';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Boi Poka | Home</title>
            </Helmet>
            <BannerSectin></BannerSectin>
            <Books></Books>
        </div>
    );
};

export default Home;