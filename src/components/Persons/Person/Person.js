import React, {Component} from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/WithClass';
import Auxiliary from '../../../hoc/Auxiliary';

class Person extends Component{
    render(){
        console.log('[Person.js] rendering...');
        return (
            <Auxiliary>
                <p onClick={this.props.click}>My name is {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}></input>
            </Auxiliary>
        )
    }
}

export default withClass(Person, classes.Person);