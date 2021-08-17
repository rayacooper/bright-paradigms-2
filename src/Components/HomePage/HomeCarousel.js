import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import "./HomeCarousel.css";
import { Carousel } from 'react-responsive-carousel';
 
// import images
import BedroomEvening from './../../Assets/Bedroom_Evening.jpg';
import BedroomMorning from './../../Assets/Bedroom_Morning.jpg';
import FoyerEntertain from './../../Assets/Foyer_Entertain_Scene.jpg';
import FoyerEvening from './../../Assets/Foyer_Evening_Scene.jpg';
import FoyerMorning from './../../Assets/Foyer_Morning_Scene.jpg';
import GreatroomEvening from './../../Assets/Greatroom_Evening_Scene.jpg';
import GreatroomRelax from './../../Assets/Greatroom_Relax_Scene.jpg';
import KitchenEntertain from './../../Assets/Kitchen_Entertain_Scene.jpg';
import KitchenEvening from './../../Assets/Kitchen_Evening_Scene.jpg';
import KitchenMorning from './../../Assets/Kitchen_Morning_Scene.jpg';  
import TheaterIntermission from './../../Assets/Theater_Intermission_Scene.jpg';
import TheaterMovie from './../../Assets/Theater_Movie_Scene.jpg';
 
 
class HomeCarousel extends Component {
    render() {
        return (
            <Carousel infiniteLoop={true} autoPlay={true}>
                <div>
                    <img src={FoyerMorning} alt='Foyer - Morning'/>
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src={FoyerEntertain} alt='Foyer - Entertaining'/>
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src={FoyerEvening} alt='Foyer - Evening'/>
                    {/* <p className="legend">Legend 3</p> */}
                </div>
                <div>
                    <img src={BedroomMorning} alt='Bedroom - Morning'/>
                    {/* <p className="legend">Legend 3</p> */}
                </div>
                <div>
                    <img src={BedroomEvening} alt='Bedroom - Evening'/>
                    {/* <p className="legend">Legend 3</p> */}
                </div>
                <div>
                    <img src={GreatroomEvening} alt='Great Room - Evening'/>
                    {/* <p className="legend">Legend 3</p> */}
                </div>
                <div>
                    <img src={GreatroomRelax} alt='Great Room - Relax'/>
                    {/* <p className="legend">Legend 3</p> */}
                </div>
                <div>
                    <img src={KitchenMorning} alt='Kitchen - Morning'/>
                    {/* <p className="legend">Legend 3</p> */}
                </div>
                <div>
                    <img src={KitchenEntertain} alt='Kitchen - Entertain'/>
                    {/* <p className="legend">Legend 3</p> */}
                </div>
                <div>
                    <img src={KitchenEvening} alt='Kitchen - Evening'/>
                    {/* <p className="legend">Legend 3</p> */}
                </div>
                <div>
                    <img src={TheaterIntermission} alt='Theater - Intermission'/>
                    {/* <p className="legend">Legend 3</p> */}
                </div>
                <div>
                    <img src={TheaterMovie} alt='Theater - Movie'/>
                    {/* <p className="legend">Legend 3</p> */}
                </div>
 
            </Carousel>
        );
    }
};
 
export default HomeCarousel
 
// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
