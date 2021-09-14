const NavBar = ({ userInput, inputHandler, submitHandler }) => {
  return (
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
  );
};

export default NavBar;
