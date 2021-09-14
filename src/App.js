import React, { useEffect, useState } from "react";
import "./App.css";
function App() {
  const featured = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5382c539ec8faa8eab75274e3030f3f2`;
  const images = `https://image.tmdb.org/t/p/w1280`;
  const searched = `https://api.themoviedb.org/3/search/movie?&api_key=5382c539ec8faa8eab75274e3030f3f2&query=`;

  const [userData, setUserData] = useState([]);
  const [userInput, setUserInput] = useState("");

  const getData = async (api) => {
    const response = await fetch(api);
    const data = await response.json();

    setUserData(data.results);
  };

  const inputHandler = (e) => {
    setUserInput(e.target.value);
  };

  const submitHandler = () => {
    if (!userInput) {
      getData(featured);
    } else {
      getData(searched + userInput);
    }
  };

  useEffect(() => {
    getData(featured);
  }, []);
  return (
    <>
      <div id="navBar">
        <input type="text" value={userInput} onChange={inputHandler} />
        <button onClick={submitHandler}>Go</button>
      </div>
      <div id="home">
        <div id="cardContainer">
          {userData.map((value) => {
            return (
              <div key={value.id} className="card">
                <div className="cardImage">
                  <img src={images + value.poster_path} />
                </div>
                <div className="cardInfo">
                  <h1>{value.title}</h1>
                  <h1>{value.original_language}</h1>
                  <h1>{value.overview}</h1>
                  <h1>{value.release_date}</h1>
                  <h1>{value.vote_average}</h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
