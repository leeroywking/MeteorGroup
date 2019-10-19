import React from 'react';
import Hello from './Hello.jsx';
import {Mongo} from 'meteor/mongo';


const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>

    <Hello />
  </div>
);

export default App;
