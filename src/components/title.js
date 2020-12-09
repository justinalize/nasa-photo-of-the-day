import React, { useState, useEffect } from 'react'

export default function Title(props) {

    return (
        <div className='title-container'>
            <p>{props.data.title}</p>
        </div>

    )
}
