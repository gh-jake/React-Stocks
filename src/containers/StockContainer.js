import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.props.stocks.map(stockObj => <Stock id={stockObj.id} stock={stockObj} onClick={this.props.buyStock} portfolio={false}/>)
        }
      </div>
    );
  }

}

export default StockContainer;
