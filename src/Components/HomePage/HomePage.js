import React from 'react';
 
import './HomePage.css'
 
import HomeCarousel from './HomeCarousel'
 
const HomePage = () => {
    return(
        <div className="HomePageMain">
            <div id='HomeCarousel'>
                <HomeCarousel/>
            </div>
            {/* <img src={HouseLogo} alt='Home Photography'/> */}
        </div>
    )
}
 
export default HomePage;
