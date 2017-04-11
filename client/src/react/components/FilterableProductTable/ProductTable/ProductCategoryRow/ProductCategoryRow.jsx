import React from 'react';

export class ProductCategoryRow extends React.Component {
  render() {
    var style = {
      textAlign: "left"
    };
    return <tr><th colSpan="1" style={style}>{this.props.category}</th></tr>;
  }
}