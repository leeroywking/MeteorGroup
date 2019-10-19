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
    setTimeout(()=>{ console.log(props); }, 3000);
    console.log(props)
  }
  

  async componentDidMount() {
    const response = await Counter.find().fetch();
    const json = await response;
    console.log(json)
    this.setState({ data: json });
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    });
    Counter.update({ "_id": "EjmuavdNppy2RrmGx" }, { "count": this.state.counter + 1 })
    console.log(this.props.counterArray[0].count)
  }

  decrement() {
    this.setState({
      counter: this.state.counter - 1
    });
    Counter.update({ "_id": "EjmuavdNppy2RrmGx" }, { "count": this.state.counter - 1 })
    console.log(this.props.counterArray[0].count)
  }
  render() {
    const visualCount = this.props.counterArray.map(
      countObj => countObj.count
    )
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

