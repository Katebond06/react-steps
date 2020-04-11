import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const app = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Max", age: 28 },
      { name: "Kata", age: 26 },
      { name: "Serhii", age: 26 },
    ],
    otherState: "some other value",
  });

  const switchNameHandler = () => {
    // console.log("Was clicked!");
    // DO NOT DO THIS ---. this.state.persons[1].name = "Kateryna";
    setPersonsState({
      persons: [
        { name: "Max", age: 28 },
        { name: "Kateryna", age: 26 },
        { name: "Serhii", age: 27 },
      ],
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        My Hobbies Racing
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      >
        Hobbies: Cameras
      </Person>
    </div>
  );
};

export default app;
