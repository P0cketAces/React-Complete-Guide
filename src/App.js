import React, { Component } from 'react';

import classes from './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Joe', age: 28 },
      { id: 2, name: 'Dave', age: 29 },
      { id: 3, name: 'Alex', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  };
  
  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((person) => {
      return person.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    let persons = null;
    let btnClass = [classes.Button];

    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return(
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            )
          })}
        </div>
      );

      btnClass.push(classes.Red);
    }

    let assignedClasses = [];
    if(this.state.persons.length <= 2){
      assignedClasses.push(classes.red);
    }
    if(this.state.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>This is my React App!</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button
          className={btnClass.join(' ')}
          onClick={this.togglePersonsHandler}>
          Toggle People
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
