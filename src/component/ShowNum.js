import React from 'react';

class ShowNum extends React.Component{

  render(){

    const numbers = [];

    for(let i = 0; i < 3; i++){
      numbers.push(
        <div className="col-sm-3 col-3 bg-white h-75 h1 d-flex justify-content-around align-items-center" key={i}>{this.props.myNum[i]}</div>
      );
    }

    return(
      <div className="col-sm-12 col-12 h-25 show-num">
        <div className="row h-100 d-flex justify-content-around align-items-center">
          {numbers}
        </div>
      </div>
    );
  }
}

export default ShowNum;
