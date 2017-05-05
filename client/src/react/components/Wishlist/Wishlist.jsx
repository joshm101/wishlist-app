import React from 'react';

import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import { WishlistItem } from './Item/WishlistItem.jsx';

export class Wishlist extends React.Component {
  render() {
    const openItems = this.props.wishlistItems.filter(item => !item.purchased).map(item => 
      <WishlistItem item={item} key={item._id} markWishlistItemAsPurchased={this.props.markWishlistItemAsPurchased} />
    );
    const purchasedItems = this.props.wishlistItems.filter(item => item.purchased).map(item =>
      <WishlistItem item={item} key={item._id} markWishlistItemAsNotPurchased={this.props.markWishlistItemAsNotPurchased} />
    );

    return (
      <div>
        <List>
          <Subheader>Items to Purchase</Subheader>
          {openItems}
        </List>
        <Divider />
        <List>
          <Subheader>Purchased Items</Subheader>
          {purchasedItems}
        </List>
      </div>
    );
  }
}