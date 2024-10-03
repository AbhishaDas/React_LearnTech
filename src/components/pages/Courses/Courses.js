import React from 'react'
import './Courses.css'
import ai from '../../../assets/img/ai.png'
import sd from '../../../assets/img/sd.png'
import dg from '../../../assets/img/dg.png'
import hacker from '../../../assets/img/hacking.png'

function Courses() {
    const courseData = [{
        title: "AI Development",
        desc: "Master AI Development",
        img:ai
    },{
        title: "Digital Marketing",
        desc: "Master Digital Marketing!!!",
        img:dg
    },{
        title: "Cyber Security",
        desc: "Master Cyber Security!!!",
        img:hacker
    },{
        title: "Software Development",
        desc: "Master Software Development!!!",
        img:sd
    },]
  return (
    <div className="container course_container">
        <div className="course_top">
            <h2 className='section_title'>Our Free Courses</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
            
            <div className="course_wrapper">{
                courseData.map((course,index)=>(
                    <div className="course_item" key={index}>
                    <span className='course_icons'>
                        <img src={course.img} alt="" />
                    </span>
                    <div className="course_content">
                        <h4>{course.title}</h4>
                        <p>{course.desc}</p>
                    </div>
                </div>

                ))}
                
            </div>
        </div>
    </div>
  )
}

export default Courses
