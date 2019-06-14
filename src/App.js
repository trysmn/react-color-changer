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
      colorGivenByUser: ""
    };
    this.handleColorChange = this.handleColorChange.bind(this);
  }

  handleColorChange(event) {
    event.preventDefault();
    console.log(event.target.value);
    if(this.state.validColors.includes(event.target.value)) {
      console.log('its a valid color');
      this.setState({
        colorGivenByUser: event.target.value
      });
    } else {
      console.log("not valid");
    }
  }

  handleColorImage(color) {
    
  }

  render() {
    return (
      <div>
        <PowerRangerColorHeader />
        <PowerRangerColorForm handleColorChange={this.handleColorChange}/>
        <PowerRangerColorGreeting color={this.state.colorGivenByUser}/> 
        <PowerRangerColorBox color={this.state.colorGivenByUser}/>
      </div>
    );
  }
}

export default App;
