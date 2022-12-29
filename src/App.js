import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Сurrent time :D',
      counter: 0,
      date: new Date()
    }
  }

  tick() {
    this.setState((state) => ({
      counter: state.counter + 1,
      date: new Date()
    }));
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  componentDidUpdate() {
    console.log(this.state);
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
