import React from 'react';
import Shared_top from '../../Shared/Shared_top';
import Footer from '../Footer/Footer';

import Banner from './Banner/Banner';
import Carouselm from './Carouselm/Carouselm';
import Extra1 from './Extra-1/Extra1';
import Search from './Search/Search';

import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Search></Search>
            <Services></Services>
            <Extra1></Extra1>
            <Footer></Footer>
            <Carouselm></Carouselm>
           
        </div>
    );
};

export default Home;
