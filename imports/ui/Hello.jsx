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

  increment(id) {
    this.setState({
      counter: this.state.counter + 1
    });
    Counter.update({ "_id": id }, { "count": this.props.counterArray[0].count + 1 })
  }

  decrement(id) {
    this.setState({
      counter: this.state.counter - 1
    });
    Counter.update({ "_id": id }, { "count": this.props.counterArray[0].count - 1 })
  }
  render() {
    const visualCount = this.props.counterArray.map(
      countObj => countObj.count
    )
    return (
      <div>
        <button onClick={() => this.increment(this.props.id[0]._id)}>Increment</button>
        <p>Counter is at {visualCount[0]}.</p>
        <button onClick={() => this.decrement(this.props.id[0]._id)}>Decrement</button>
      </div>
    );
  }
}


CountContainer = withTracker(() => {
  return {
    counterArray: Counter.find().fetch(),
    id: Counter.find().fetch()
  };
})(Hello);

export default CountContainer

