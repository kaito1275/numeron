import React from 'react';


class Board extends React.Component{

  render(){
    const numbers = [];
    for(let i = 0; i<=9; i++){
      numbers.push(<li className="col-sm-4 col-4" key={i}><div className="col-sm-10 text-center my-sm-2 my-2 py-sm-3 px-1 mx-auto num-btn" onClick={ () => this.props.numClick(i)}>{i}</div></li>)
    }
    return(
      <div className="col-sm-6 col-6 h-75 d-flex justify-content-around align-items-center board">
        <div className="row">
          <ul className="p-0 col-sm-10 col-10 m-auto">
            <div className="row">{numbers}</div>
          </ul>
          <ul className="p-0 col-sm-10 col-10 m-auto">
            <div className="row d-flex justify-content-center">

              <li className="col-sm-5 col-6 text-center my-2 my-sm-2"><button className="col-sm-10 col-10 text-center my-sm-2 py-sm-3 mx-auto num-btn m-auto py-1" onClick={this.props.setNum} disabled={this.props.isDone ? true : false}>start</button></li>

              <li className="col-sm-5 col-6 text-center my-2 my-sm-2"><button className="col-sm-10 col-10 text-center my-sm-2 py-sm-3 mx-auto num-btn m-auto py-1" onClick={this.props.judgeNum} disabled={this.props.myNum.length === 3 ? false : true}>judge</button></li>

              <li className="col-sm-5 col-6 text-center my-2 my-sm-2"><button className="col-sm-10 col-10 text-center my-sm-2 py-sm-3 mx-auto num-btn m-auto py-1" onClick={this.props.deleteNum} disabled={this.props.myNum.length === 0 ? true : false}>back</button></li>

              <li className="col-sm-5 col-6 text-center my-2 my-sm-2"><button className="col-sm-10 col-10 text-center my-sm-2 py-sm-3 mx-auto num-btn m-auto py-1" onClick={this.props.resetGame} disabled={this.props.isDone ? false : true}>reset</button></li>

            </div>
          </ul>

        </div>
      </div>
    );
  }

}

export default Board;
