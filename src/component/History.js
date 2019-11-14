import React from 'react';

class History extends React.Component{
  render(){

    const history = this.props.history;
    let result = history.map((his,index) => {
      return(
        <tr key={index}>
          <td>{his.numbers}</td>
          <td>{his.eat}</td>
          <td>{his.bite}</td>
        </tr>
      );
    });


    return(
      <div className="col-sm-6 col-6 h-75 history">
        <div className="row">
          <table className="table table-bordered text-center font-weight-bold mt-3 col-10 mx-auto text-white">
            <thead>
                <tr>
                    <th>Number</th>
                    <th>EAT</th>
                    <th>BITE</th>
                </tr>
            </thead>
            <tbody>
                {result}
            </tbody>
          </table>
        </div>
      </div>

    );
  }
}

export default History;
