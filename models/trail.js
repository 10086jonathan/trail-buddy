const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 5
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, { 
    timestamps: true
});

const trailSchema = new Schema({
    trailName: {
        type: String,
        required: true
        // enum: ['Angels Landing', 'Four Pass Loop', 'Franconia Ridge Loop']    
    },
    location: {
        type: String,
        required: true
        // enum: ['Springdale, UT', 'Snowmass Village, CO', 'Lincon, NH']
    },
    difficulty: {
        type: String,
        enum: ['Black', 'BlueBlack', 'Blue']
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    comments: [commentSchema]
}, {
    timestamps: true 
});

module.exports = mongoose.model('Trail', trailSchema);