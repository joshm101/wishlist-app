import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { FilterableProductTable } from './FilterableProductTable/FilterableProductTable.jsx';
import { Wishlist } from './Wishlist/Wishlist.jsx';
import { Card, CardHeader } from 'material-ui/Card';

export class App extends React.Component {
  render() {
    injectTapEventPlugin();
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
              <Wishlist wishlistItems={WISHLIST_ITEMS} />
            </Card>
          </div>
        </MuiThemeProvider>
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

ReactDOM.render(
  <App />,
  mountNode
);
