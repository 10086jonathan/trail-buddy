const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trailSchema = new Schema({
    trailName: {
        type: String,
        enum: ['Angels Landing', 'Four Pass Loop', 'Franconia Ridge Loop']    
    },
    location: {
        type: String,
        enum: ['Springdale, UT', 'Snowmass Village, CO', 'Lincon, NH']
    },
    difficulty: {
        type: String,
        enum: ['black', 'blueBlack', 'blue']
    }
}, {
    timestamps: true 
});

module.exports = mongoose.model('Trail', trailSchema);