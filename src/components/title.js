import React, { useState, useEffect } from 'react'
import styled from 'styled-components'


const StyledTitle = styled.div`
color: black;
margin: 0 auto;
display:flex;
flex-direction: column;
text-align:right;
width: 25%;
left: 59%;
position: absolute;
top:30%;
p{
    text-align:center;
    display:flex;
    align-self:center;
    font-size: 1.2rem;
    font-weight: bold;
}
h1 {
    text-align:center;
}
`


export default function Title(props) {

    return (
        <StyledTitle >
            <h1>NASA Photo of the Day</h1>
          <p>{props.data.title}:</p>
        </StyledTitle>

    )
}
