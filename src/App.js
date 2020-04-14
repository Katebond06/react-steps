// import React, { useState } from "react";
// import "./App.css";
// import Person from "./Person/Person";

// const App = (props) => {
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       { name: "Kate", age: 26 },
//       { name: "Serhii", age: 26 },
//       { name: "Max", age: 28 },
//     ],
//     otherState: "some other value",
//   });

//   const switchNameHandler = () => {
//     // console.log("Was clicked!");
//     // Do not do this this.state.persons[0].name = "Kateryna";
//     setPersonsState({
//       persons: [
//         { name: "Kateryna", age: 26 },
//         { name: "Serhii", age: 26 },
//         { name: "Max", age: 29 },
//       ],
//     });
//   };

//   const nameChangedHandler = (event) => {
//     setPersonsState({
//       persons: [
//         { name: "Kateryna", age: 26 },
//         { name: event.target.value, age: 26 },
//         { name: "Max", age: 29 },
//       ],
//     });
//   };

//   const style = {
//     backgroundColor: "lightblue",
//     font: "inherit",
//     border: "1px solid blue",
//     padding: "8px",
//     cursor: "pointer",
//   };

//   return (
//     <div className="App">
//       <h1>Hi, I am a React App</h1>
//       <p>This is really working!</p>
//       <button style={style} onClick={switchNameHandler}>
//         Switch Name
//       </button>
//       <Person
//         name={personsState.persons[0].name}
//         age={personsState.persons[0].age}
//       />
//       <Person
//         name={personsState.persons[1].name}
//         age={personsState.persons[1].age}
//         click={switchNameHandler}
//         changed={nameChangedHandler}
//       >
//         My Hobbies: Camera
//       </Person>
//       <Person
//         name={personsState.persons[2].name}
//         age={personsState.persons[2].age}
//       />
//     </div>
//   );
// };

// export default App;

import React, { Component } from "react";
import "./App.css";

import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    username: "missKitKa",
  };

  usernameChangedHandler = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <ol>
          <li>Create TWO new components: UserInput and UserOutput - done</li>
          <li>
            UserInput should hold an input element, UserOutput two paragraphs -
            done
          </li>
          <li>
            Output multiple UserOutput components in the App component (any
            paragraph texts of your choice) - done
          </li>
          <li>
            Pass a username (of your choice) to UserOutput via props and display
            it there - done
          </li>
          <li>
            Add state to the App component (=> the username) and pass the
            username to the UserOutput component - done
          </li>
          <li>
            Add a method to manipulate the state (=> an event-handler method)
          </li>
          <li>
            Pass the event-handler method reference to the UserInput component
            and bind it to the input-change event
          </li>
          <li>
            Ensure that the new input entered by the user overwrites the old
            username passed to UserOutput
          </li>
          <li>
            Add two-way-binding to your input (in UserInput) to also display the
            starting username
          </li>
          <li>
            Add styling of your choice to your components/ elements in the
            components - both with inline styles and stylesheets
          </li>
        </ol>
        <UserInput
          changed={this.usernameChangedHandler}
          currentName={this.state.username}
        />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName="Kate" />
      </div>
    );
  }
}

export default App;
