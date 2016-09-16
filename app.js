import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.update = this.update.bind(this);
    this.state = {red: 0, blue: 0};
  }

  update(e) {
    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
      blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value
    })
  }

  render() {
    return (
      <div>
        <NumInput ref="red"
          min={0}
          max={255}
          step={0.01}
          val={+this.state.red}
          label="Red"
          type="number"
          update={this.update} />
        <NumInput ref="blue"
          min={0}
          max={255}
          step={0.01}
          val={+this.state.blue}
          label="Blue"
          update={this.update} />
        <br/>
      </div>
    )
  }

}

class NumInput extends React.Component {
  render() {
    let label = this.props.label !== '' ?
      <label>{this.props.label} - {this.props.val}</label> : '';

    return (
      <div>
        <input ref="inp"
               min={this.props.min}
               max={this.props.max}
               type={this.props.type}
               step={this.props.step}
               defaultValue={this.props.val}
               onChange={this.props.update} />
          <br/>
          {label}
      </div>
    )
  }
}

NumInput.propTypes = {
  min: React.PropTypes.number,
  max: React.PropTypes.number,
  step: React.PropTypes.number,
  val: React.PropTypes.number,
  label: React.PropTypes.string,
  update: React.PropTypes.func.isRequired,
  type: React.PropTypes.oneOf(['number', 'range'])
}

NumInput.defaultProps = {
  min: 0,
  max: 0,
  step: 1,
  val: 0,
  label: '',
  type: 'range'
}

export default App;