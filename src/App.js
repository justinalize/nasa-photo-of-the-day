import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import { API_KEY, BASE_URL } from './key'
import Title from './components/title'
import Body from './components/body'
import styled from 'styled-components'
// API FETCH URL:   https://api.nasa.gov/planetary/apod?api_key=6RFlse80rtHVmkZNrtevyALHsEsvKa5yzFcDb4eJ&date=2020-12-07

// COME BACK LATER AND ADD A CONDITION STATEMENT SO IF THE MEDIA TYPE IS A VIDEOP, PLAY THE VIDEO AND IF ITS A PHOTO DISPLAY THE PHOTO

// ADD MEDIA QUIERIES WHEN YOU COME BACK TO FIX IT UP


function App() {

  const [data, setData] = useState({})

  useEffect(() => {
    const fetchImage = () => {
      axios.get(`${BASE_URL}?api_key=${API_KEY}`)
        .then(response => { 
          console.log(response.data)
          setData(response.data)
        })
        .catch(error => {
          console.log(error)
            debugger
        })
    }
    fetchImage()
  }, [])
  

  return (
    <div className="App">
        <Title data={data} />
      <Body data={data} />
      
      
    </div>
  );
}

export default App;
