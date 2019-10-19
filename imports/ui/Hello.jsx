import React, { Component } from 'react';
import Counter from '../api/counter'
import { withTracker } from 'meteor/react-meteor-data';
import {Tracker} from 'meteor/tracker'


class Hello extends Component {
  constructor(props){
    super(props);
    this.state = {
      counter: 0
    }
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    });
    Counter.update({ "_id": "hcLFwHfsiHH88uhfQ" }, { "count": this.props.counterArray[0].count + 1 })
  }

  decrement() {
    this.setState({
      counter: this.state.counter - 1
    });
    Counter.update({ "_id": "hcLFwHfsiHH88uhfQ" }, { "count": this.props.counterArray[0].count - 1 })
  }
  render() {
    const visualCount = this.props.counterArray.map(
      countObj => countObj.count
    )
    console.log(visualCount)
    return (
      <div>
        <button onClick={() => this.increment()}>Increment</button>
        <p>Counter is at {visualCount[0]}.</p>
        <button onClick={() => this.decrement()}>Decrement</button>
      </div>
    );
  }
}


CountContainer = withTracker(() => {
  return {
    counterArray: Counter.find().fetch()
  };
})(Hello);

export default CountContainer

