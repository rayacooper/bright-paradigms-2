import React from 'react';
 
import './Contact.css'
 
import FacebookLogo from './../../Assets/Facebook-Logo-White.png';
 
const Contact = () => {
 
    return(
        <div className='ContactMain'>
 
            <div className="ContactInner">
                <p><b>CONNECT</b></p>
                <a href='https://www.facebook.com/brightparadigms/?modal=admin_todo_tour' target='blank'>
                    <img id='FBLogo' src={FacebookLogo} alt='Facebook Logo'/></a>
            </div>
 
            <div className="ContactInner">
                <p><b>CONTACT</b></p>
                <p>Forrest D Kelsey</p>
                <p>801.494.7687</p>
                <a href='mailto: forrest.kelsey@gmail.com' target='blank'><p>FORREST.G.KELSEY@GMAIL.COM</p></a>
                <br />
            </div>
 
            <p></p>
            
        </div>
    )
}
 
export default Contact;
