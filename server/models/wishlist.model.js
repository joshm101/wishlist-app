const mongoose = require('mongoose');
const WishlistItem = require('./wishlist-item.model');

var Schema = mongoose.Schema;

var WishlistSchema = new Schema({
  name: String,
  items: [
    {
      type: ObjectId,
      ref: 'WishlistItem'
    }
  ]
  // comments: [{type: ObjectId, ref: 'Comment'}]
});

module.exports = mongoose.model('Wishlist', WishlistSchema);