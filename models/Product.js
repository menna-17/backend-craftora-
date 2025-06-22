const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: false }, 
  title: { type: String }, 
  description: { type: String },
  price: { type: Number },
  category: { type: String },
  stock: { type: Number, default: 0, min: 0 }, 
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
