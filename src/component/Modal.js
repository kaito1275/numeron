import React from 'react';

class Modal extends React.Component{
  render(){

    let judge = "";
    if(this.props.win === true){
      judge = <div className={this.props.win === true ? "modal-wrap-on" : "modal-wrap"}>
        <div className="modal">
          <div>
            <span>You Win</span>
            <button className="col-sm-10 col-10 text-center my-sm-2 py-sm-3 mx-auto num-btn m-auto py-1" onClick={this.props.resetGame}>One More Time</button>
          </div>
        </div>
      </div>
    }

    if(this.props.lose === true){
      judge = <div className={this.props.lose === true ? "modal-wrap-on" : "modal-wrap"}>
        <div className="modal">
          <div>
            <span>You Lose</span>
            <button className="col-sm-10 col-10 text-center my-sm-2 py-sm-3 mx-auto num-btn m-auto py-1" onClick={this.props.resetGame}>One More Time</button>
          </div>
        </div>
      </div>
    }

    if(this.props.rule === true){
      judge = <div className={this.props.rule === true ? "modal-wrap-on" : "modal-wrap"}>
        <div className="modal rule">
          <div>
            <span>
              あなたは、コンピュータの考えた3桁の数字を当てます。<br/>
              数字は、０～９の中から３つの数字を使っています。<br/>同じ数字は使っていません。<br/>
              あなたがコールした数字に対して、コンピュータは<br/>EAT(イート)とBITE(バイト)の数を答えます。<br/>
              ・EAT（イート）・・・数値と位が合っている場合<br/>
              ・BITE（バイト）・・・数値だけが合っており、位は違っている場合<br/>
              例えば、コンピュータが思い浮かべた数字が「258」で、あなたがコールした数字が「289」ならば、
             「2」が数字も位も合っていて、「8」は数字だけ合っているため、
              1E(イート)1B(バイト)となります。<br/>
              これを繰り返し、5回以内に3桁の数字を当てたら勝ち。
            </span>
            <div className="text-center">
              <button className="col-sm-3 col-10 text-center my-sm-2 py-sm-1 mx-auto num-btn m-auto py-1" onClick={this.props.showRule}>Close</button>
            </div>
          </div>
        </div>
      </div>
    }

    return(
      <React.Fragment>
      {judge}
      </React.Fragment>
    );
  }
}

export default Modal;
