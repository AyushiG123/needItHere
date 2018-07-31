import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" style={styles}>
      <h1>
        #NEED
      </h1>
      <h2> 
        Where the needs of the community make a stand
        </h2>
      </div>
    );
  }
}

const styles={
  h1:{
    color: "blue",
    fontSize:"80px",
  }
}

export default App;
