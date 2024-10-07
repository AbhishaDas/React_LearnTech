import React from 'react'
import './ContactUs.css'

function ContactUs() {
  return (
    <div className="container">
      <div className="contactUs_container">
        <h1>Contact Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem beatae omnis soluta quisquam. Asperiores earum hic sed, ipsum optio aspernatur. Perferendis sint facilis aperiam.</p>
        <form className='contact_form' action="">
          <div className="form_grp">
            <label htmlFor="name">Name</label>
            <input type="text" id='name' name='name'/>
          </div>
          <div className="form_grp">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' name='email'/>
          </div>
          <div className="form_grp">
            <label htmlFor="message">Message</label>
            <textarea id='message' name='message' rows={"5"} required></textarea>
          </div>
          <button type='submit' className='submit_btn'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default ContactUs

