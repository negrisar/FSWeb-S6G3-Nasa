import React, { useEffect, useState } from "react";
import "./App.css";
import Image from "./components/image";
import Youtube from "./components/youtube";
import axios from "axios";
import { styledtitle } from "./style/title";



function App() {
  const [data,setData] = useState("");
  const [date,setDate] = useState("2023-06-05");
  const changeHandler = (event)=> {
    console.log(event.target.value);
    setDate(event.target.value);

  }
  useEffect(()=>{
    axios.get("https://api.nasa.gov/planetary/apod?api key=F9kKVw0vwejI8iN0y7uukvmbdaTgu8NL1seX5V1pdate"+ date)
        .then(res=>{
          setData(res.data)
        })
 },[date])

  return (
    <div className="App">
      <input type="date" value = {date} onChange={changeHandler}
      />
      <styledtitle>{data.title}</styledtitle>
      {data.media_type === "image"
      ? <Image  dataurl = {data.url}/>
      : <Youtube dataurl = {data.url} />}

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
