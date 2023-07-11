import React, { useEffect, useState } from "react";
import "./App.css";
import Image from "./components/image";
import Youtube from "./components/youtube";
import axios from "axios";
import {Title} from './style/title';




function App() {
  const [data,setData] = useState("");
  const [date,setDate] = useState("2023-06-18");
  const changeHandler = (event)=> {
    console.log(event.target.value);
    setDate(event.target.value);

  }
  useEffect(()=>{
    axios.get("https://api.nasa.gov/planetary/apod?api_key=d372QTq06Xk3bZWX6KOvyu7JqLIo2LxaMY7cWrJ8&date="+ date)
        .then(res=>{
          setData(res.data)})
        .catch(err => { console.log(err) })
        
 },[date]);

  return (
    <div className="App">
      <input type="date" value = {date} onChange={changeHandler}
      />
      <Title>{data.title}</Title>
      {data.media_type === "image"
      ? <Image  dataUrl = {data.url}/>
      : <Youtube dataUrl = {data.url} />}

      <p className="explanation">
        {data.explanation}
      </p>
      <p className="date">
        {data.date}
      </p>
    </div>
  );
}

export default App;
