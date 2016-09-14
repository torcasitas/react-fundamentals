import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      red: 0,
      green: 0,
      blue: 0
    };
    this.update = this.update.bind(this);
  }

  update(e) {
    let refs = this.refs;
    this.setState({
      red: ReactDOM.findDOMNode(refs.red.refs.inp).value,
      green: ReactDOM.findDOMNode(refs.green.refs.inp).value,
      blue: ReactDOM.findDOMNode(refs.blue.refs.inp).value
    });
  }

  render() {
    return (
      <div>
        <hr/>
        <Slider ref="red" update={this.update}  />
        {this.state.red}
        <br/>
        <hr/>
        <Slider ref="green" update={this.update} />
        {this.state.green}
        <br/>
        <hr/>
        <Slider ref="blue" update={this.update} />
        {this.state.blue}
        <br/>
        <hr/>
      </div>
    );
  }
}

class Slider extends React.Component {
  render() {
    return (
      <div>
      <input ref="inp" type="range"
        min="0"
        max="255"
        onChange={this.props.update} />
      </div>
    );
  }
}

export default App;