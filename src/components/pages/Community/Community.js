import React from 'react'
import './Community.css'
import tc from '../../../assets/img/tc.jpg'

function Community() {
    const handleClick =()=>{
        window.open();
    }
  return (
    <div className="container">
        <div className="start_wrapper" style={{marginTop:'150px'}}>
            <div className="start_img">
                <img src={tc} alt="" />
            </div>
            <div className="start_content">
                <h2 className='section_title'>Join Our Free Tech Community</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo officia adipisci beatae, placeat quo iure sapiente molestias non explicabo dignissimos nobis veniam aliquid repellendus necessitatibus, cum ipsum, natus minus sunt.</p>
                <button className='register_btn' onClick={handleClick}>Join Now</button>
            </div>
        </div>
    </div>
  )
}

export default Community
