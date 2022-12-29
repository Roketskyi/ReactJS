import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Сurrent time :D',
      counter: 0,
      date: new Date()
    }

    setInterval(() => {
      this.setState(state => ({
        counter: state.counter + 1,
        date: new Date()
      }));
    }, 1000);
  }


  render() {
    return (
      <div>
        <p>{this.state.title}</p>
        <p>Counter: {this.state.counter}</p>
        <p>Time: {this.state.date.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default App;
