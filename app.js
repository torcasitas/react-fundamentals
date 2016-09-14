import React from 'react';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      txt: 'Joder que manera que caer agua',
      cat: 0
    };
    this.update = this.update.bind(this);
  }

  update(e) {
    this.setState({txt: e.target.value})
  }

  render() {
    return (
      <div>
        <Widget txt={this.state.txt} update={this.update} />
        <Widget txt={this.state.txt} update={this.update} />
        <Widget txt={this.state.txt} update={this.update} />
        <Widget txt={this.state.txt} update={this.update} />
      </div>
    )
  }
}

// Stateless component
const Widget = (props) => {
  return (
    <div>
      <input type="text" onChange={props.update}/>
      <h1>{props.txt}</h1>
    </div>
  )
}

export default App;