import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {
  state = {
    stocks: [], 
    myStocks: [],
    filteredStocks: []
  }
  
  componentDidMount() {
    fetch('http://localhost:3000/stocks')
    .then(res => res.json())
    .then(data => {
      this.setState({ 
        stocks: data,
        filteredStocks: data 
      });
    });
  }

  priceSort = () => {
    const sortedStocks = this.state.filteredStocks.sort((a, b) => {
      return b.price - a.price;
    });
    this.setState({ 
      filteredStocks: sortedStocks
    })
  }

  alphaSort = () => {
    const sortedStocks = this.state.filteredStocks.sort((a, b) => {
      const nameA = a.name.toUpperCase(); // ignore upper and lowercase
      const nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
    
      // names must be equal
      return 0;
    });
    this.setState({
      filteredStocks: sortedStocks
    })
  }

  filterStock = (event) => {
    const target = event.target.value;
    if (target === 'All') {
      this.setState({
        filteredStocks: this.state.stocks
      })
    }
    else {
      const stocksArray = this.state.stocks.filter(stock => stock.type === target);
      this.setState({
        filteredStocks: stocksArray
      });
    }

  }

  buyStock = (event) => {
    const targetObj = this.state.stocks.find(stock => stock.id === parseInt(event.target.id));
    
    if (!this.state.myStocks.includes(targetObj)) {
      const portfolioStocks = [...this.state.myStocks, targetObj];
      this.setState({ myStocks: portfolioStocks });
    }
  }

  deleteStock = (event) => {
    const targetId = event.target.id;
    const myStocksArray = this.state.myStocks.filter(stock => stock.id != targetId)
    this.setState({ myStocks: myStocksArray }) 
  }
  
  render() {
    return (
      <div>
        <Header/>
        <MainContainer 
          stocks={this.state.filteredStocks}
          myStocks={this.state.myStocks} 
          priceSort={this.priceSort} 
          alphaSort={this.alphaSort}
          filterStock={this.filterStock}
          buyStock={this.buyStock}
          deleteStock={this.deleteStock}
        />
      </div>
    );
  }
}

export default App;
