const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var WishlistItemSchema = new Schema({
  name: String,
  link: String,
  notes: String,
  purchased: Boolean,
  price: Number,
});

module.exports = mongoose.Model('WishlistItem', WishlistItemSchema)