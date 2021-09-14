import gif1 from "../assets/404gif1.gif";
import gif2 from "../assets/404gif2.gif";
const NotFound = () => {
  return (
    <div id="home">
      <div className="notFound">
        <img className="not gif1" src={gif1} alt="images" />
        <h1 className="notFoundHeading">No Data Found</h1>
        <img className="not gif2" src={gif2} alt="images" />
      </div>
    </div>
  );
};

export default NotFound;
