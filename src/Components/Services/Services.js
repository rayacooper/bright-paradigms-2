import React, {useState} from 'react';

import './Services.css';

import Arrow from './../../Assets/Carat_Symbol.png';
import ArrowReverse from './../../Assets/Carat_Symbol_Reverse.png';
import ArrowDown from './../../Assets/Carat_Symbol_Down.png';


const Services = () => {

    let [lightingVisible, updateLightingVisible] = useState(false);
    let [shadingVisible, updateShadingVisible] = useState(false);
    let [temperatureVisible, updateTemperatureVisible] = useState(false);

    // console.log(window.screen.width + 2)
    return (
        <div>
            {/* Mobile View: */}
            <div id='services-mobile-view'>

                <div className = "services-header_main--mobile">
                    <p>Our Mission:</p>
                    <h1>Delivering clear,<br />individualized<br />solutions</h1>
                </div>

                <div className = 'services-main--mobile'>
                    <div className={lightingVisible ? "services-sections_mobile" : "services-sections_hidden"} id='AboutShading'>
                        <h1 id='AbtLight' onClick={() => updateLightingVisible(!lightingVisible)}>
                        <img className='Arrow' src={lightingVisible ? ArrowDown : Arrow} alt='Carat'/>
                            Lighting 
                        <img className='Arrow' src={lightingVisible ? ArrowDown : ArrowReverse} alt='Carat'/> </h1>
                        
                        <p>As a premier Vantage Controls dealer we are committed to using the very best in technology 
                            in order to find the perfect solution for your home or business, delivering high quality, 
                            natural tunable light, making any space more visually comfortable. </p>
                    </div>
 
                    <div className={shadingVisible ? "services-sections_mobile" : "services-sections_hidden"} id='AboutShading'>
                        <h1 id='AbtShade' onClick={() => updateShadingVisible(!shadingVisible)}>
                        <img className='Arrow' src={shadingVisible ? ArrowDown : Arrow} alt='Carat'/>
                            Shading
                        <img className='Arrow' src={shadingVisible ? ArrowDown : ArrowReverse} alt='Carat'/>
                        </h1>
                        <p>Direct light can cause fading, glare, and over heating. By integrating smart shades into your system, 
                            you get to decide how and when you use natural light. A customized system will allow for optimized 
                            natural light which increases health, reduces electricity costs, and protects your home.</p>
                    </div>
 
                    <div className={temperatureVisible ? "services-sections_mobile" : "services-sections_hidden"} id='AboutTemperature'>
                        <h1 id='AbtTemp' onClick={() => updateTemperatureVisible(!temperatureVisible)}>
                        <img className='Arrow' src={temperatureVisible ? ArrowDown : Arrow} alt='Carat'/>
                            Comfort Control
                        <img className='Arrow' src={temperatureVisible ? ArrowDown : ArrowReverse} alt='Carat'/>
                        </h1>
                        <p>What if you could significantly reduce your annual energy bill without compromising comfort, 
                            all while never having to touch your thermostat? By integrating your home’s HVAC into a 
                            centrally controlled system, we can have your home make adjustments intelligently based on 
                            room occupancy and time of day.</p>
                    </div>
                </div>

            </div>

            {/* Desktop View: */}
            <div id='services-desktop-view'>

                <div id='services-header'>
                    <div className='services-shadow' id='header-shadow' ></div>
                    <div id='services-header_main'>
                        <p id='services-header_main-p'>Our Mission:</p>
                        <h1 id='services-header_main-h1'>Delivering clear,<br />individualized<br />solutions</h1>
                    </div>
                </div>

                <div className='services-main_element'>
                    <div className='services-shadow' style={{left: '0'}}></div>
                    <div className='services-main_element_inner'>
                        <div className='services-main_element_inner_info'>
                            <h1>Lighting</h1>
                            <p>As a premier Vantage Controls dealer we are committed to using the very best in technology 
                            in order to find the perfect solution for your home or business, delivering high quality, 
                            natural tunable light, making any space more visually comfortable.</p>
                        </div>
                        <img className='services-main_element_inner_img' src='./../../Assets/Aspen_Springs_Interior.jpg' alt=''/>
                    </div>
                </div>

                <div className='services-main_element'>
                    <div className='services-shadow' style={{right: '0'}}></div>
                    <div className='services-main_element_inner'>
                        <img className='services-main_element_inner_img' src='' alt=''/>
                        <div className='services-main_element_inner_info'>
                            <h1>Shading</h1>
                            <p>Direct light can cause fading, glare, and overheating. 
                                By integrating smart shades into your system, you get to decide how and when you use natural light. 
                                A customized system will allow for optimized natural light which increases health, 
                                reduces electricity costs, and protects your home.</p>
                        </div>
                    </div>
                </div>

                <div className='services-main_element'>
                    <div className='services-shadow' style={{left: '0'}}></div>
                    <div className='services-main_element_inner'>
                        <div className='services-main_element_inner_info'>
                            <h1>Comfort Control</h1>
                            <p></p>
                        </div>
                        <img className='services-main_element_inner_img' src='' alt=''/>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Services;