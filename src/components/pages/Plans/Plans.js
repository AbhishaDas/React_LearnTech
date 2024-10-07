import React from 'react'
import './Plans.css'

function Plans() {
    const pricing_data = [
        {
            title: 'Regular Member',
            price: '$0',
            duration: '/month',
            color: '#fff',
            feature: [
                'Unlimited access to the Courses',
                'Customer Support',
                'Personal Mentor',
                'Standard Options',
                '5 Classes per week'
            ]
        }, {
            title: 'Premium Member',
            price: '$100',
            duration: '/month',
            color: '#5dadec',
            feature: [
                'Unlimited access to the Courses',
                'Customer Support',
                'Personal Mentor',
                'Standard Options',
                '5 Classes per week'
            ]
        }, {
            title: 'Standard Member',
            price: '$10',
            duration: '/month',
            color: '#fff',
            feature: [
                'Unlimited access to the Courses',
                'Customer Support',
                'Personal Mentor',
                'Standard Options',
                '5 Classes per week'
            ]
        },
    ]
    return (
        <div className="container">
            <div className="pricing_top">
                <h2 className='section_title' style={{marginTop:'150px'}}>Premium Pricing Plan</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum vitae minus esse aliquid magni</p>
            </div>
            <div className="pricing_wrapper">
                {pricing_data.map((pricing_item, index) =>(
                    <div className="pricing_item" key={index}>
                        <div className="pricing_card_top" style={{background:pricing_item.color}}>
                            <h2 className='section_title'>{pricing_item.title}</h2>
                            <h2 className='pricing_section_title'>
                                {pricing_item.price} <span>{pricing_item.duration}</span>
                            </h2>
                        </div>
                        <div className="services">
                            <ul>
                                {pricing_item.feature.map((feature, index)=>(
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                            <button className='register_btn' style={{ display: 'block', margin: '30px auto' }} >Join</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Plans
