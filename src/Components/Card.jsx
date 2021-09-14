import notFound from "../assets/notFound.gif";
const images = `https://image.tmdb.org/t/p/w1280`;
const Card = ({ overview, release_date, poster_path, title, vote_average }) => {
  return (
    <div className="card">
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
          src={poster_path != null ? images + poster_path : notFound}
        />
      </div>

      <div className="cardInfo">
        <p className="cardInfoTitle">{title}</p>
        <p
          className={
            vote_average < 5 ? "cardInfoVote red" : "cardInfoVote green"
          }
        >
          {vote_average}
        </p>
      </div>
    </div>
  );
};

export default Card;
