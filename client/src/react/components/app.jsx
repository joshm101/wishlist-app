import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { FilterableProductTable } from './FilterableProductTable/FilterableProductTable.jsx';
import { Wishlist } from './Wishlist/Wishlist.jsx';
import { Card, CardHeader } from 'material-ui/Card';

export class App extends React.Component {
  constructor() {
    super();

    this.state = {
      wishlistItems: WISHLIST_ITEMS
    };
    this.markWishlistItemAsPurchased = this.markWishlistItemAsPurchased.bind(this);
    this.markWishlistItemAsNotPurchased = this.markWishlistItemAsNotPurchased.bind(this);
  }

  /**
   * Given the ID of item we want to set, set the item
   * as purchased.
   * @param {*} id - ID of item we are searching for
   */  
  markWishlistItemAsPurchased(id) {
    let wishlistItemsCopy = this.state.wishlistItems.slice();
    let itemToModify = this._findItem(id);
    if (itemToModify) {
      // item was found because it's not undefined
      itemToModify.purchased = true;
      let modifiedItemIndex = this._findItemIndex(id);
      let itemsLength = this.state.wishlistItems.length;
      this.setState({
        wishlistItems: [
          ...wishlistItemsCopy.slice(0, modifiedItemIndex),
          itemToModify,
          ...wishlistItemsCopy.slice(modifiedItemIndex + 1, itemsLength)
        ]
      });
    }
  }

  /**
  * Given the ID of item we want to set, set the item
  * as not purchased.
  * @param {*} id - ID of item we are searching for
  */
  markWishlistItemAsNotPurchased(id) {
    let wishlistItemsCopy = this.state.wishlistItems.slice();
    let itemToModify = this._findItem(id);
    if (itemToModify) {
      // item was found because it's not undefined
      itemToModify.purchased = false;
      let modifiedItemIndex = this._findItemIndex(id);
      let itemsLength = this.state.wishlistItems.length;
      this.setState({
        wishlistItems: [
          ...wishlistItemsCopy.slice(0, modifiedItemIndex),
          itemToModify,
          ...wishlistItemsCopy.slice(modifiedItemIndex + 1, itemsLength)
        ]
      });
    }
  }

  /**
   * Makes copy of wishlist and finds item in that copy
   * that has an _id equal to the passed in id field.
   * Will return undefined if item is not found
   * @param {*} id - ID of item we are searching for
   */
  _findItem(id) {
    let wishlistItemsCopy = this.state.wishlistItems.slice();
    return wishlistItemsCopy.find((item) => item._id === id);
  }

  /**
   * Makes copy of wishlist and finds index of item
   * in that copy that has an _id field matching the 
   * passed in id field
   * @param {*} id - ID of item we are trying to get index of
   */
  _findItemIndex(id) {
    let wishlistItemsCopy = this.state.wishlistItems.slice();
    return wishlistItemsCopy.findIndex((item) => item._id === id);
  }

  render() {
    let style = {
      marginTop: '50px'
    };
    let titleStyle = {
      fontSize: '20px'
    };
    return (
      <div style={style}>
        <MuiThemeProvider>
          <div className="container">
            <Card>
              <CardHeader title="Tech wishlist" titleStyle={titleStyle} />
              <Wishlist wishlistItems={this.state.wishlistItems} 
                        markWishlistItemAsNotPurchased={this.markWishlistItemAsNotPurchased}
                        markWishlistItemAsPurchased={this.markWishlistItemAsPurchased} />
            </Card>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

let mountNode = document.getElementById('react-container') || document.createElement('div');

var WISHLIST_ITEMS = [
  {
    name: 'GTX 1080 Video Card',
    link: 'https://www.amazon.com/ASUS-GeForce-STRIX-Graphics-STRIX-GTX1080-A8G-GAMING/dp/B01K5F8MJK/ref=sr_1_1?s=pc&ie=UTF8&qid=1493871387&sr=1-1&keywords=gtx+1080',
    notes: 'I want this video card',
    price: 534.99,
    _id: 1,
    purchased: false,
  },
  {
    name: '4K Monitor',
    link: 'https://www.amazon.com/LG-24UD58-B-24-Inch-Monitor-FreeSync/dp/B01LPNKFK0/ref=sr_1_3?s=electronics&ie=UTF8&qid=1493871443&sr=1-3&keywords=4k+monitor',
    notes: 'I want this monitor',
    price: 339.99,
    _id: 2,
    purchased: false,
  },
  {
    name: 'Yamaha HS7 monitors',
    link: 'https://www.amazon.com/Yamaha-Active-Studio-Monitors-Speaker/dp/B00GP646XK/ref=sr_1_1?s=electronics&ie=UTF8&qid=1493871505&sr=1-1&keywords=yamaha+hs7',
    notes: 'I want these monitors',
    price: 599.99,
    _id: 3,
    purchased: false,
  },
  {
    name: 'Fire TV stick',
    link: 'https://www.amazon.com/Amazon-Fire-TV-Stick-With-Alexa-Voice-Remote-Streaming-Media-Player/dp/B00ZV9RDKK/ref=sr_1_1?s=electronics&ie=UTF8&qid=1493871545&sr=1-1&keywords=chromecast',
    notes: 'Cheapest item',
    price: 39.99,
    _id: 4,
    purchased: true,
  },
  {
    name: 'i7 CPU',
    link: 'https://www.amazon.com/Intel-Desktop-Processor-i7-7700K-BX80677I77700K/dp/B01MXSI216/ref=sr_1_1?s=electronics&ie=UTF8&qid=1493871614&sr=1-1&keywords=i7+7700k',
    notes: 'CPU',
    price: 339.00,
    _id: 5,
    purchased: false,
  }
]


injectTapEventPlugin();
ReactDOM.render(
  <App />,
  mountNode
);
