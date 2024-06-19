import React from "react";
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import Food from "./foods.jsx";

function App()
{
  return(
    <>
    <header className="d-flex flex-column justify-content-center mt-1 mb-3 align-items-center">
      <h3>Easy recipes</h3>
      <h5>Keep it easy with these simple but delicious recipes. From make-ahead lunches and midweek meals to fuss-free sides and moreish cakes, we've got everything</h5>
      <p>Sky.dev</p>
    </header>

    <section className="container d-flex justify-content-center">
      <div className="input-group mb-3">
        <input type="text" className="js-input form-control rounded-left" placeholder="Find a meals"></input>  
        <button className="search-btn btn">Search</button>
      </div> 
    </section>

    <section className="recipe-header-container justify-content-center p-5">
      <h2>Your Search Results</h2>
      <div className="recipe-container">
        <Food/>
      </div>
    </section>
    </>
  )
}

export default App;
<script src="https://kit.fontawesome.com/c7563de4da.js" crossorigin="anonymous"></script>