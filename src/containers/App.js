import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor');

    this.state = {
      persons: [
        { id: 1, name: 'Joe', age: 28 },
        { id: 2, name: 'Dave', age: 29 },
        { id: 3, name: 'Alex', age: 26 }
      ],
      otherState: 'some other value',
      showPersons: false,
      showCockpit: true
    };
  }

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // componentWillMount(){
  //   console.log('[App.js] componentWillMount', props);
  // }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
  }
  
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
    console.log('[App.js] render');
    let persons = null;

    if(this.state.showPersons){
      persons = (
        <Persons
          persons={this.state.persons}
          click={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );      
    }

    return (
      <div className={classes.App}>
        <button onClick={() => {
          this.setState({showCockpit: false});
        }}>
          Remove Cockpit
        </button>
        {
          this.state.showCockpit ?
          <Cockpit 
            title={this.props.title}
            persons={this.state.persons}
            showPersons={this.state.showPersons}
            click={this.togglePersonsHandler}
          /> : null
        }
        {persons}
      </div>
    );
  }
}

export default App;
