import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
//https://digidezine.com/wp-content/uploads/revslider/agency-sparta-animated1/4-25_mini_mini2.jpg

const StyledBody = styled.div`
margin: 0 5% 0 5%; 
display: flex;
justify-content: center;
position: absolute;
top:13%;
p {
    width: 40%;
    display:flex;
    align-items:center;
    flex-wrap:wrap;
    margin-left:6%;
    margin-top:15%;
}


img {
    margin: 0% ;
    padding: 0%;
    width: 40% ;
}
`




export default function Body(props) {

    return (
        <StyledBody >
            <img className='image'
                src={props.data.hdurl}
                alt="Nasa Photo of the Day"
            />

            <p>{props.data.explanation}</p>
        </StyledBody>

    )
}
