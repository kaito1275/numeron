import React from 'react';

class Time extends React.Component{
  render(){


    return(
      <div className="time text-center">{this.props.time}</div>
    );
  }
}

export default Time;
