import React, { useEffect, useState } from "react";
import "./App.css";
import notFound from "./assets/notFound.gif";
import gif1 from "./assets/404gif1.gif";
import gif2 from "./assets/404gif2.gif";
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
  if (userData.length === 0) {
    return (
      <>
        <div id="navBar">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              type="text"
              value={userInput}
              onChange={inputHandler}
              placeholder="Search Movie"
            />

            <button type="submit" onClick={submitHandler}>
              Go
            </button>
          </form>
        </div>
        <div id="home">
          <div className="notFound">
            <img className="not gif1" src={gif1} alt="images" />
            <h1 className="notFoundHeading">404 Not Found</h1>
            <img className="not gif2" src={gif2} alt="images" />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div id="navBar">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              type="text"
              value={userInput}
              onChange={inputHandler}
              placeholder="Search Movie"
            />

            <button type="submit" onClick={submitHandler}>
              Go
            </button>
          </form>
        </div>
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
                <div key={id} className="card">
                  <div className="cardHiddenInfo">
                    <div>
                      <p className="cardHiddenInfoHeading">Overview:- </p>
                      <p>{overview} </p>
                    </div>

                    <div>
                      <p className="cardHiddenInfoHeading">Release Date:- </p>
                      <p>{release_date} </p>
                    </div>
                  </div>

                  <div className="cardImage">
                    <img
                      alt="images"
                      src={
                        poster_path != null ? images + poster_path : notFound
                      }
                    />
                  </div>

                  <div className="cardInfo">
                    <p className="cardInfoTitle">{title}</p>
                    <p
                      className={
                        vote_average < 5
                          ? "cardInfoVote red"
                          : "cardInfoVote green"
                      }
                    >
                      {vote_average}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default App;
