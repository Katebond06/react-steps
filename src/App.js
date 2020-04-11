import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Kate", age: 26 },
      { name: "Serhii", age: 26 },
      { name: "Max", age: 28 },
    ],
    otherState: "some other value",
  });

  const switchNameHandler = () => {
    // console.log("Was clicked!");
    // Do not do this this.state.persons[0].name = "Kateryna";
    setPersonsState({
      persons: [
        { name: "Kateryna", age: 26 },
        { name: "Serhii", age: 26 },
        { name: "Max", age: 29 },
      ],
    });
  };

  return (
    <div className="App">
      <h1>Hi, I am a React App</h1>
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
        My Hobbies: Camera
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
};

export default App;
