import React from 'react'
import './Card.css'
import { useState } from 'react';
export default function Card({name,ml,price,oldPrice,image,theme,buttonColor}) {
    let[size,setSize] = useState("M");

  return(

    <div className="card">

        <div className='card-top' style={{backgroundColor:theme}}>
            <div className='circle-shape'>
                <img className='drink-image' src={image} alt ={name}></img>
            </div>
        </div>

        <div className='card-body'>
            <h2>{name} <span className='ml'>({ml} ml)</span> </h2>
            <p className='desc'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid itaque velit, placeat a, exercitationem id quia ad quas nulla laboriosam vitae non voluptate modi consequuntur ullam laudantium, tempore eum magni molestias illo. Aut, blanditiis corrupti a, vel doloremque nulla voluptates obcaecati omnis quidem ipsum cum cumque. Aspernatur alias accusamus aliquam?
            </p>
            <div className='size-row'>
                {['S','M','L'].map(item =>
                    <button
                    key = {item}
                    className={`size-btn ${size === item ? 'active' : ''} `}
                    onClick={()=>{setSize(item)}}
                    >
                        {item}
                    </button>
                )}
            </div>
        </div>

        <div className='bottom-row'>

            <div className='price-box'>
                <span className='price'>${price}</span>
                <span className='old-price'>${oldPrice}</span>

            <button className='order-btn' style={{backgroundColor:buttonColor}}>
                order now
            </button>
            </div>
            
        </div>
    </div>

  )
}
