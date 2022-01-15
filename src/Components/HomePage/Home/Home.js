import React from 'react';
import Banner from '../Banner/Banner';
import Custom from '../Custom/Custom';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
      <div>  
          <Navbar />
            <Banner />
            <Custom/>
      </div>
    );
};

export default Home;