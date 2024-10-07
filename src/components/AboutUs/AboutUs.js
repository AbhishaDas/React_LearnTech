import React from 'react';
import './AboutUs.css'
import miya from '../../assets/img/miya.jpg'

function AboutUs() {

        return (
            <div className="container">
                <div className="aboutUs_container">
                    <div className="team_member">
                        <h2>Our Team</h2>
                        <div className="member_card">
                            <img className='member_img' src={miya} alt="" />
                            <h3 className='member_name'>Miya Helinski</h3>
                            <p className='member_role'>Co-Founder</p>
                        </div>
                    </div>
                    <div className="aboutUs_desc">
                        <h1 className='acoutUs_heading'>About Us</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eum sequi officia commodi deleniti ex eius ratione reiciendis voluptates id, minima eveniet porro, quaerat sed impedit nulla, quod veniam dolorum?</p>
                    </div>
                </div>
            </div>
        )
    
}

export default AboutUs
