import React from 'react'
import './Home.css'
import meta from '../../../assets/img/meta.jpeg'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import Courses from '../Courses/Courses'
import Community from '../Community/Community'
import Plans from '../Plans/Plans'

function Home() {
    const handleClick =()=>{
        window.open('https://youtu.be/ZDAdi6ZLktc?si=9SWpgWW1jcPVXVcU','_blank')
    }
  return (
    <>
    <section>
        <div className="container">
            <div className="home_container">
                <div className="home_content">
                    <h2 className='section_title'>Learn Everything For Free</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                    <div className="home_buttons">
                        <button className='register_btn' onClick={handleClick}>Get Started</button>
                        <button className='register_btn' onClick={handleClick}>Watch Now</button>
                    </div>
                </div>
                <div className="home_img">
                    <div className="home_img_wrapper">
                        <div className="box">
                            <div className="box_img">
                                <img src={meta} alt="" />
                            </div>
                        </div>
                        <div className="whatsapp_container">
                            <h5>500 + students</h5>
                            <AiOutlineWhatsApp color='green'/>
                        </div>
                        <div className="support">
                            <h5>Active Support</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Courses/>
    <Community/>
    <Plans/>
    </>
  )
}

export default Home
