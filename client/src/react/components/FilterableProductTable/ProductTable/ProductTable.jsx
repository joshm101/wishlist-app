import React from 'react';
import { ProductRow } from './ProductRow/ProductRow.jsx';
import { ProductCategoryRow } from './ProductCategoryRow/ProductCategoryRow.jsx';

export class ProductTable extends React.Component {
  render() {
    var style = {
      textAlign: "left"
    };
    var lastCategory = null;
    var rows = [];
    this.props.products.forEach((product) => {
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={ product.category } key={product.category} />)
      }
      rows.push(<ProductRow product={ product } key={product.name} />);
      lastCategory = product.category;
    });
    return(
      <table>
        <thead>
          <tr>
            <th style={style}>Name</th>
            <th style={style}>Price</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}