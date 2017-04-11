import React from 'react';
import ReactDOM from 'react-dom';
import { FilterableProductTable } from './FilterableProductTable/FilterableProductTable.jsx';

export class App extends React.Component {
  render() {
    let style = {
      textAlign: 'center'
    };
    return (
      <div>
        <FilterableProductTable products={PRODUCTS} />
      </div>
    );
  }
}

let mountNode = document.getElementById('react-container') || document.createElement('div');
var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

ReactDOM.render(
  <App />,
  mountNode
);
