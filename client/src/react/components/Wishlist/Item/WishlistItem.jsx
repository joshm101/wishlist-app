import React from 'react';

import { ListItem } from 'material-ui/List';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton';

export class WishlistItem extends React.Component {
  
  constructor() {
    super();
    this.handleMenuItemClick = this.handleMenuItemClick.bind(this);
  }

  handleMenuItemClick(item) {
    window.location = this.props.item.link;
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
        <MenuItem onClick={this.handleMenuItemClick}>Visit item page</MenuItem>
        <MenuItem>Mark as purchased</MenuItem>
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