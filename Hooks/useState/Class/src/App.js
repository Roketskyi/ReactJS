import React from 'react';

class App extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      age: 0
    };
  }

  render() {
    return(
      <div class="all">
        <div class="setAge">
          <p>You are {this.state.age} years old</p>
          <button onClick={() => this.setState({age: this.state.age + 1})}>+</button>
          <button onClick={() => this.setState({age: this.state.age - 1})}>-</button>
          <br></br>
          <button onClick={() => this.setState({age: 0})}>Reset</button>
        </div>
      </div>
    )
  }
}

export default App;
