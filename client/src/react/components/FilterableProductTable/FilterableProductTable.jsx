import React from 'react';
import { ProductTable } from './ProductTable/ProductTable.jsx';
import { SearchBar } from './SearchBar/SearchBar.jsx';

export class FilterableProductTable extends React.Component {
  render() {
    return(
      <div>
        <SearchBar />
        <ProductTable products={this.props.products} />
      </div>
    );
  }
}


