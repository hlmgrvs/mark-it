import mongoose, { Mongoose } from 'mongoose';
const { Schema } = mongoose;

const flagEntrySchema = new Schema({
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
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    date: {
        required: true,
        type: Date
    },
    timestamps: true
});

const FlagEntry = Mongoose.model('FlagEntry', flagEntrySchema);

module.exports = FlagEntry