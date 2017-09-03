import React, { Component } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

export default class FilterableProductTable extends Component {

  constructor(props) {
    super(props);

    this.onFilterTextChange = this.onFilterTextChange.bind(this);

    this.state = {
      filterText: '',
      inStockOnly: false
    }
  }

  onFilterTextChange(inputVal) {
    this.setState({filterText: inputVal});
  }

  render() {
    return (
      <div className="FilterableProductTable">

        <SearchBar filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextChange={this.onFilterTextChange}/>

        <ProductTable products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly} />

      </div>
    );
  }
}
