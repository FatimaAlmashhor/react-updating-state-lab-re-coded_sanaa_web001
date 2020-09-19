// Code DigitalClicker Component Here
import React from 'react';

export default class DigitalClicker extends React.Component {

    this.state = {
      timesClicked: 0,
    };
    
  handleClicke = () => {
    this.setState(prevState => {
        return {
      timesClicked: prevState.timesClicked+1
    }
    })
  }

  render() {
    return (
      <button onClick={this.handleClicke}>{this.state.timesClicked}</button>
    );
  }
}

