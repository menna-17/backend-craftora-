const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: false }, // not required to support imports
  title: { type: String }, // used for Kaggle compatibility
  description: { type: String },
  price: { type: Number },
  category: { type: String },
  stock: { type: Number, default: 0, min: 0 }, // no negative stock
  seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  image: { type: String },

  // Optional fields from imports
  main_category: { type: String },
  average_rating: { type: Number },
  rating_number: { type: Number },
  images: [{ type: String }],
  store: { type: String }
}, {
  timestamps: true,
  strict: false
});

module.exports = mongoose.model('Product', ProductSchema);
