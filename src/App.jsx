import { useState, useEffect } from "react";
import "./App.css";

// Import our components
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

export default function App() {

  const apiKey = "98e3fb1f";

  const [movie, setMovie] = useState(null);

  const getMovie= async(searchTerm) => {
    let response;

    try {
      if (searchTerm == '') {

        let min = 1000000;
        let max = 5000000;

        let randNum = Math.round(Math.random() * (max - min)) + min;

        let url = `http://www.omdbapi.com/?apikey=${apiKey}&i=tt${randNum}`

        response = await fetch(url);
      } else {
    response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    );
  }
    const data = await response.json();
    setMovie(data);
  } catch (e) {
    console.error(e)
  }
}


useEffect(() => {
  getMovie('');
}, []);


  return (
    <div className="App">
      <Form movieSearch={getMovie}/>
      <MovieDisplay movie={movie} />
    </div>
  );
};


