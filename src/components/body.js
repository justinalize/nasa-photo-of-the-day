import React, { useState, useEffect } from 'react'

export default function Body(props) {

    return (
        <div className='body-container'>
            <img className='image'
                src={props.data.hdurl}
                alt="pic haha"
            />

            <p>{props.data.explanation}</p>

        </div>

    )
}
