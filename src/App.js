import React, { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import NotFound from "./Components/NotFound";

import Card from "./Components/Card";

function App() {
  const featured = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5382c539ec8faa8eab75274e3030f3f2`;

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
  if (userData.length === 0) {
    return (
      <>
        <NavBar
          userInput={userInput}
          inputHandler={inputHandler}
          submitHandler={submitHandler}
        />
        <NotFound />
      </>
    );
  } else {
    return (
      <>
        <NavBar
          userInput={userInput}
          inputHandler={inputHandler}
          submitHandler={submitHandler}
        />
        <div id="home">
          <div id="cardContainer">
            {userData.map((value) => {
              const {
                id,
                overview,
                release_date,
                poster_path,
                title,
                vote_average,
              } = value;
              return (
                <Card
                  key={id}
                  overview={overview}
                  release_date={release_date}
                  poster_path={poster_path}
                  title={title}
                  vote_average={vote_average}
                />
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default App;
