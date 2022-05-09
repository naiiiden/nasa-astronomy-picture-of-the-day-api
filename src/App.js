/* css import */
import "./style/style.css";

import { useState, useEffect, useCallback } from "react";

function App() {
  const [planetaryData, setPlanetaryData] = useState("");
  const [date, setDate] = useState(new Date());
  const [days, setDays] = useState(0);

  const incrementDate = useCallback(() => {
    setDays(prevState => prevState + 1);
  }, []);
    
  const decrementDate = useCallback(() => {
    setDays(prevState => prevState - 1);
  }, []);

  useEffect(() => {
    setDate(prevState => new Date(Date.now() + days * 24 * 60 * 60 * 1000));
  }, [days, setDate])

  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=uTnsgTcp3h0ZB9VHc9owhgcfrCGxJ4G0cX0jUn6a&date=${date.getFullYear().toString()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`)
      .then(res => res.json())
      .then(data => setPlanetaryData(data))
  }, [date]);

  const today = new Date();

  return (
    <div>
      {date > today && <p>tomorrow's picture is not available yet</p>}

      {date <= today && 
        <figure className="App">
          <h1>Astronomy Picture of the Day</h1>
          <p className="date">{planetaryData.date}</p>
          <img src={planetaryData.url} alt={planetaryData.title}/>
          <figcaption className="title">{planetaryData.title}</figcaption>
          <p className="description">{planetaryData.explanation}</p>
          <button onClick={decrementDate}>previous day</button>
          <button onClick={incrementDate}>next day</button>
        </figure>}
    </div>
  );
}

export default App;
