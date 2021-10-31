import React from 'react';
import Items from '../Items/Items';
import Banner from '../Banner/Banner';
import ExtraOne from '../ExtraOne/ExtraOne';
import ExtraTwo from '../ExtraTwo/ExtraTwo';

const Home = () => {
    return (
        <div>
             
            <Banner></Banner>
            <Items></Items>
            <ExtraOne></ExtraOne>
            <ExtraTwo></ExtraTwo>
            

        </div>
    );
};

export default Home;