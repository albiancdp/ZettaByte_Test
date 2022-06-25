const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tableSchema = new Schema({
  articelId: {
    type: Schema.Types.ObjectId,
    ref: 'articel',
    required: true,
    lowercase: true,
    trim: true,
  },
  name: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true,
    trim: true
  },
  isActive: {
    type: Boolean,
    required: true,
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


module.exports = mongoose.model('comment', tableSchema);
