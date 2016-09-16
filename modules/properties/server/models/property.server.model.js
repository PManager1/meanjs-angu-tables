'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Property Schema
 */
var PropertySchema = new Schema({
  address: {
    type: String,
    default: '',
    required: 'Please fill Property name - address',
    trim: true
  },
  city: {
    type: String,
    default: '',
    required: 'Please fill Property name -city',
    trim: true
  },
  contact_name: {
    type: String,
    default: '',
    required: 'Please fill Property name-phone',
    trim: true
  },
  phone: {
    type: String,
    default: '',
    required: 'Please fill Property name-phone',
    trim: true
  },
  listPrice: {
    type: String,
    default: '',
    required: 'Please fill Property name-phone',
    trim: true
  },
  offerPrice: {
    type: String,
    default: '',
    required: 'Please fill Property name-phone',
    trim: true
  },
  DOM: {
    type: String,
    default: '',
    required: 'Please fill Property name-phone',
    trim: true
  },
  dateAdded: {
    type: String,
    default: '',
    required: 'Please fill Property name-phone',
    trim: true
  },
  email: {
    type: String,
    default: '',
    required: 'Please fill Property name-phone',
    trim: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Property', PropertySchema);
