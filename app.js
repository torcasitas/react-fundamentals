import React from 'react';

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
    return (
      <div>
        <h1>Hello World</h1>
        <b>Bold</b>
      </div>
    );
  }
}

export default App;