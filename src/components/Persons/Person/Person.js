import React, {Component} from 'react';
import classes from './Person.css';
import Auxiliary from '../../../hoc/Auxiliary';
import auxiliary from '../../../hoc/Auxiliary';

class Person extends Component{
    render(){
        console.log('[Person.js] rendering...');
        return (
            <Auxiliary>
                <div className={classes.Person}>
                    <p onClick={this.props.click}>My name is {this.props.name} and I am {this.props.age} years old!</p>
                    <p>{this.props.children}</p>
                    <input type="text" onChange={this.props.changed} value={this.props.name}></input>
                </div>
            </Auxiliary>
        )
    }
}

export default Person;