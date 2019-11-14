import React from 'react';
import Board from './component/Board';
import History from './component/History';
import ShowNum from './component/ShowNum';
import Modal from './component/Modal';
import Time from './component/Time';

import './App.css';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
      cp_numbers:[],
      my_numbers:[],
      history:[],
      isDone: false,
      win: false,
      lose: false,
      time: "0.00"
    }

    this.numClick = this.numClick.bind(this);
    this.setNum = this.setNum.bind(this);
    this.judgeNum = this.judgeNum.bind(this);
    this.deleteNum = this.deleteNum.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.showRule = this.showRule.bind(this);
    this.runTimer = this.runTimer.bind(this);

  }

  componentDidUpdate(){

  }

  numClick(props){
    if(this.state.isDone === false){
      alert("スタートボタンを押してください")
      return;
    }
    if(this.state.my_numbers.indexOf(props) >= 0){
      alert("同じ数字は使えません");
      return;
    }
    if(this.state.my_numbers.length >= 3){
      return;
    }
    const numbers = this.state.my_numbers.slice();
    numbers.push(props);
    this.setState({ my_numbers: numbers});
  }

  judgeNum(){
    const myNumbers = this.state.my_numbers.slice();
    const cpNumbers = this.state.cp_numbers.slice();
    let result = [];
    let history = this.state.history.slice();
    let eat = 0;
    let bite = 0;
    let numbers = "";

    if(myNumbers[0] === cpNumbers[0]){
      eat++;
    }else if(cpNumbers.indexOf(myNumbers[0]) !== -1){
      bite++;
    }else{

    }

    if(myNumbers[1] === cpNumbers[1]){
      eat++;
    }else if(cpNumbers.indexOf(myNumbers[1]) !== -1){
      bite++;
    }else{

    }

    if(myNumbers[2] === cpNumbers[2]){
      eat++;
    }else if(cpNumbers.indexOf(myNumbers[2]) !== -1){
      bite++;
    }else{

    }

    myNumbers.map(num => {
      numbers = numbers + String(num);
    });


    result = [{numbers: numbers,eat: eat, bite: bite}];

    result.forEach((res) => {
      history.push(res);
      if(res.eat === 3){
        this.setState({ win: true});
        clearTimeout(this.timeoutId);
      }else if(history.length === 5 && res.eat === 3){
        this.setState({ win: true});
        clearTimeout(this.timeoutId);
      }else if(history.length === 5){
        this.setState({ lose: true});
        clearTimeout(this.timeoutId);
      }
    })
    this.setState({
      history: history,
      my_numbers:[],
    });
  }

  setNum(){
    const numbers = [];
    let num;
    for(let i = 0; i < 3; i++){
      num = Math.floor(Math.random() * 10);
      if(numbers.indexOf(num) >= 0 ){
        return;
      }
      numbers.push(num)

    }
    this.setState({
      cp_numbers: numbers,
      isDone: true,
    });

    console.log(numbers)
    this.startTime = Date.now();
    this.runTimer()
  }

  deleteNum(){
    const myNumbers = this.state.my_numbers.slice();
    myNumbers.pop();
    this.setState({my_numbers: myNumbers})
  }

  resetGame(){
    const myNumbers = []
    const cpNumbers = []
    const history = []

    if(typeof this.timeoutId !== 'undefined'){
          clearTimeout(this.timeoutId);
        }

    this.startTime = Date.now();
    this.setState({
      my_numbers: myNumbers,
      cp_numbers: cpNumbers,
      history: history,
      isDone: false,
      win:false,
      lose:false,
      rule: false,
      time:"0.00"
    })
  }

  showRule(){
    this.setState({ rule: !this.state.rule});
  }

  runTimer(){

    let time = ( (Date.now() - this.startTime) / 1000).toFixed(2);
    this.setState({time: time});
    this.timeoutId = setTimeout( ()=>{
      this.runTimer()
    },10);
  }


  render(){
    return (
      <main className="container">
        <div className="row">
          <ShowNum myNum={this.state.my_numbers} />
          <Board
            numClick={this.numClick}
            setNum={this.setNum}
            isDone={this.state.isDone}
            myNum={this.state.my_numbers}
            judgeNum={this.judgeNum}
            deleteNum={this.deleteNum}
            resetGame={this.resetGame}
          />
          <History history={this.state.history} />
          <Modal
            win={this.state.win}
            lose={this.state.lose}
            resetGame={this.resetGame}
            rule={this.state.rule}
            showRule={this.showRule}
          />

        <div className=" text-center rule-btn" onClick={this.showRule}>rule</div>
        <Time time={this.state.time}/>
        </div>
      </main>
    );
  }
}

export default App;
