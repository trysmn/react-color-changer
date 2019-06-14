import React, {Component} from 'react';
import './App.css';

import PowerRangerColorHeader from './Components/PowerRangerColorHeader';
import PowerRangerColorForm from './Components/PowerRangerColorForm';
import PowerRangerColorBox from './Components/PowerRangerColorBox';
import PowerRangerColorGreeting from './Components/PowerRangerColorGreeting';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      validColors: ["green", "red", "blue", "black", "white", "yellow", "pink"],
      colorGivenByUser: "",
      submitted: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if(this.state.validColors.includes(event.target.value)) {
      console.log('its a valid color');
      this.setState({
        colorGivenByUser: event.target.value
      });
    } else {
      console.log("not valid");
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      submitted: true
    });
  }

  render() {
    return (
      <div>
        <PowerRangerColorHeader />
        <PowerRangerColorForm handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        {this.state.submitted === true && <PowerRangerColorGreeting color={this.state.colorGivenByUser}/>}
        {this.state.submitted === true && <PowerRangerColorBox color={this.state.colorGivenByUser}/>}
      </div>
    );
  }
}

export default App;
