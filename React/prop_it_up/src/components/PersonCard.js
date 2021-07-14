import React, {Component} from 'react';
class PersonCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            counter:0
        }
    }
    render(){
        const {firstName, lastName, age, hairColor} = this.props;
        const{counter} = this.state.counter;
        return (
            <>
                <h1>{firstName}, {lastName}</h1>
                <p>Age: {age + this.state.counter}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={ this.increase }>Birthday Button for {firstName} {lastName}</button>
            </>
            )
        }
    increase = () => {
        let count  = this.state.counter + 1;
        this.setState({counter: count});
    }   
        
}
export default PersonCard;