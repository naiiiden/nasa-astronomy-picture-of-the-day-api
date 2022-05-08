/* css import */
import "./style/style.css";

import { useState, useEffect } from "react";

function App() {
  const [planetaryData, setPlanetaryData] = useState("");

  useEffect(() => {
    fetch("https://api.nasa.gov/planetary/apod?api_key=uTnsgTcp3h0ZB9VHc9owhgcfrCGxJ4G0cX0jUn6a")
      .then(res => res.json())
      .then(data => setPlanetaryData(data))
  }, []);

  console.log(planetaryData);

  return (
    <figure className="App">
      <h1>Astronomy Picture of the Day</h1>
      <p className="date">{planetaryData.date}</p>
      <img src={planetaryData.url} alt={planetaryData.title}/>
      <figcaption className="title">{planetaryData.title}</figcaption>
      <p className="description">{planetaryData.explanation}</p>
    </figure>
  );
}

export default App;
