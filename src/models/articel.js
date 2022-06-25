const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tableSchema = new Schema({
  title: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
    trim: true
  },
  year: {
    type: String,
    required: true
  },
  tag: {
    type: Array,
    required: true,
    lowercase: true,
    trim: true
  },
  creator: {
    type: String,
    required: true,
    trim: true
  },
  link: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

tableSchema.method('toJSON', function () {
  const { _id, ...object } = this.toObject();
  object.id = _id;
  delete object.__v;
  return object;
});

module.exports = mongoose.model('articel', tableSchema);
