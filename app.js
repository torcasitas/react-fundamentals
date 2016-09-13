import React from 'react';
import ReactDOM from 'react-dom';

//class App extends React.Component {
//  render() {
//    return <h1>Hello World</h1>;
//  }
//}

// This will have state
//class App extends React.Component {
//  render() {
//    return React.createElement('h1', null, 'Hello Guys');
//  }
//}

// Stateless function
//const App = () => { return <h1> Hello Boys </h1> }
//const App = () => <h1> Hello Boys </h1>

// jsx: wrapped dom elements in parentheses (more than one node)
class App extends React.Component {
  

  render() {
    let val = this.props.txt;
    return <h1>{val}</h1>;
  }
}

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
  txt: 'Que manera de caer agua'
}

ReactDOM.render(
  <App cat={53}  />,
  document.getElementById('app')
)

export default App;