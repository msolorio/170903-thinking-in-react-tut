import React, { Component } from 'react';
import FilterableProductTable from './FilterableProductTable';
import './App.css';

class App extends Component {
  render() {
    const products = [
      {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
      {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
      {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
      {category: "Electronics", price: "$99.99", stocked: true, name: "photon colider"},
      {category: "Electronics", price: "$399.99", stocked: false, name: "light bulb"},
      {category: "Electronics", price: "$199.99", stocked: true, name: "physics book"}
    ];

    return (
      <div className="App">
        <FilterableProductTable products={products} />
      </div>
    );
  }
}

export default App;
