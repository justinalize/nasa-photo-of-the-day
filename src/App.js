import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import { API_KEY, BASE_URL } from './key'
import Title from './components/title'
import Body from './components/body'
// API FETCH URL:   https://api.nasa.gov/planetary/apod?api_key=6RFlse80rtHVmkZNrtevyALHsEsvKa5yzFcDb4eJ&date=2020-12-07


function App() {

  const [data, setData] = useState({})

  useEffect(() => {
    const fetchImage = () => {
      axios.get(`${BASE_URL}?api_key=${API_KEY}&date=2020-12-07`)
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
