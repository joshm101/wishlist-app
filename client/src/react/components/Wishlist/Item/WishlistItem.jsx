import React from 'react';

import { ListItem } from 'material-ui/List';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton';

export class WishlistItem extends React.Component {
  
  constructor() {
    super();
    this.handleVisitLinkClick = this.handleVisitLinkClick.bind(this);
    this.handleMarkAsPurchasedClick = this.handleMarkAsPurchasedClick.bind(this);
    this.handleMarkAsNotPurchasedClick = this.handleMarkAsNotPurchasedClick.bind(this);
  }

  handleVisitLinkClick(item) {
    window.location = this.props.item.link;
  }

  handleMarkAsPurchasedClick() {
    this.props.markWishlistItemAsPurchased(this.props.item._id);
  }

  handleMarkAsNotPurchasedClick() {
    this.props.markWishlistItemAsNotPurchased(this.props.item._id);
  }


  render() {
    const priceStyle = {
      color: 'rgba(0, 128, 0, 0.8)',
      fontWeight: 500,
    };
    const menuIconButton = (
      <IconButton tooltip="Options"
                  touch={true}>
        <MoreVertIcon />
      </IconButton>
    );
    const rightIconMenu = (
      <IconMenu iconButtonElement={menuIconButton}>
        <MenuItem onClick={this.handleVisitLinkClick}>Visit item page</MenuItem>
        {!this.props.item.purchased && 
          <MenuItem onClick={this.handleMarkAsPurchasedClick}>Mark as purchased</MenuItem>
        }
        {this.props.item.purchased && 
          <MenuItem onClick={this.handleMarkAsNotPurchasedClick}>Mark as not purchased</MenuItem>
        }
        <MenuItem>Delete Item</MenuItem>
      </IconMenu>
    );
    return(
      <ListItem
        primaryText={this.props.item.name}
        secondaryText={
          <p>
            <span>{this.props.item.notes}</span><br />
            <span style={priceStyle}>${this.props.item.price}</span>
          </p>
          }
        secondaryTextLines={2}
        rightIconButton={rightIconMenu}       
      />
    );
  }
}