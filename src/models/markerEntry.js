const mongoose = require('mongoose');
const { Schema } = mongoose;

const markerEntrySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    body: String,
    comments: String,
    severity: {
        type: Number,
        min: 0,
        max: 10,
        default: 0
    },
    latitude: {
        type: Number,
        required: true,
        min: -90,
        max: 90
    },
    longitude: {
        type: Number,
        required: true,
        min: -180,
        max: 180
    },
    date: {
        required: true,
        type: Date
    },

},
    { timeStamps: true }
);

const MarkerEntry = mongoose.model('MarkerEntry', markerEntrySchema);

module.exports = MarkerEntry