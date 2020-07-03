import React, { useState, useEffect } from "react";
import NavLinks from "../Components/NavLink";
import Data from "../Data/drinks.json";

import "../Style/Explore.css";
import "../Style/Settings.css";

const ExplorePage = () => {
  const [drinks, setDrinks] = useState([]);
  const [search, setSearch] = useState(" ");
  const [fileteredDrinks, setFilteredDrinks] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [selectedDrink, setSelectedDrink] = useState();
  const [comment, setComment] = useState([
    { name: "jasmine", title: "hej", info: "super" },
  ]);

  const fetchDrinks = Data.cocktails;

  useEffect(() => {
    setDrinks(fetchDrinks);
  }, [fetchDrinks]);

  useEffect(() => {
    setFilteredDrinks(
      drinks.filter((index) => {
        return index.name.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [search, drinks]);

  const holdTheDrinks = () => {
    if (fileteredDrinks.length === 0) {
      return <p id="drinkText"> The drink does not exist!</p>;
    } else
      return (
        <div>
          {fileteredDrinks.map((item, index) => (
            <button id="DrinksButton" onClick={() => checkTrueOrFalse(index)}>
              <div key={drinks.id}>
                <p>{item.name}</p>
                <img
                  style={{ height: 200 }}
                  src={item.image}
                  alt="drinks"
                ></img>
              </div>
            </button>
          ))}
        </div>
      );
  };

  const checkTrueOrFalse = (selectedDrinks) => {
    if (toggle) {
      setSelectedDrink(selectedDrinks);
      setToggle(false);
    } else setToggle(true);
  };

  const checkDrink = () => {
    if (toggle) {
      return holdTheDrinks();
    } else return showIndividualDrinks();
  };

  const nextDrink = () => {
    setSelectedDrink(selectedDrink + 1);
  };
  const prevDrink = () => {
    setSelectedDrink(selectedDrink - 1);
  };
  const reset = () => {
    checkTrueOrFalse();
  };

  const showIndividualDrinks = () => {
    return (
      <div>
        <p>{fileteredDrinks[selectedDrink].name}</p>
        <p>{fileteredDrinks[selectedDrink].preparation}</p>
        <img
          style={{ height: 200 }}
          src={fileteredDrinks[selectedDrink].image}
          alt="drinks"
        ></img>
        <br></br>
        <button onClick={prevDrink} disabled={selectedDrink === 0}>
          Previous
        </button>
        <button onClick={reset}> Reset </button>
        <button
          onClick={nextDrink}
          disabled={selectedDrink === drinks.length - 1}
        >
          Next
        </button>
        <br></br>
        <div>{commentsForm()}</div>
        <div>{showComment()}</div>
      </div>
    );
  };

  const addComment = (e) => {
    const submitComment = {
      name: e.target.elements.name.value,
      title: e.target.elements.title.value,
      info: e.target.elements.info.value,
    };
    e.preventDefault();
    setComment([...comment, submitComment]);
  };

  const showComment = () => {
    const timestamp = Date.now();

    return comment.map((item, index) => {
      return (
        <div id="commentBox">
          <p>By: {comment[index].name}</p>

          <p>
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
            }).format(timestamp)}
          </p>
          <hr></hr>
          <h3> {comment[index].title}</h3>
          <p>{comment[index].info}</p>
        </div>
      );
    });
  };

  const commentsForm = () => {
    return (
      <form onSubmit={addComment}>
        <div>
          <input name="name" type="text" placeholder="Your name" />
        </div>
        <div>
          <input name="title" type="text" placeholder="Title" />
        </div>
        <div>
          <input name="info" type="text" placeholder="Say something..." />
        </div>
        <br></br>
        <br></br>
        <input type="submit" value="Post" />
      </form>
    );
  };

  return (
    <div>
      <NavLinks />
      <p id="Drink">Fin your favoutire drink!</p>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      ></input>
      <br></br>
      {checkDrink()}
    </div>
  );
};
export default ExplorePage;
