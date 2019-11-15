import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component{
    // static getDerivedStateFromProps(props, state){
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    // componentWillReceiveProps(props){
    //     console.log('[Persons.js] componentWillReceiveProps', props);
    // }

    shouldComponentUpdate(nextProps, nextState){
        console.log('[Persons.js] shouldComponentUpdate');
        // This is doing a shallow compare but we're ok here
        // because when we compare the pointers, they should be pointing
        // to different memory addresses due to the fact that we are
        // creating a new persons array and copying data over to it
        // in the app.js function rather than modifying the original.
        if(nextProps.persons !== this.props.persons){
            return true
        }
        else{
            return false;
        }
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message: 'Snapshot!'};
    }

    // componentWillUpdate(){
    //     console.log('[Persons.js] componentWillUpdate');
    // }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    componentWillUnmount(){
        console.log('[Persons.js] componentWillUnmount');
    }

    render(){
        console.log('[Persons.js] rendering...');
        return this.props.persons.map((person, index) => {
            return(
                <Person
                    key={person.id}
                    name={person.name}
                    age={person.age}
                    click={() => this.props.click(index)}
                    changed={(event) => this.props.changed(event, person.id)}
                />
            )
        });
    }
}

export default Persons;