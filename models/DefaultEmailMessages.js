const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const DefaultEmailMessagesModel = new Schema({
    message:{type:String,default:null},
    messageType:{type:Number,default:0},
    lang: { type: String, default: 'en' },
    isBlocked: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
}, {
    timestamps: true
});
const DefaultEmailMessages = mongoose.model('DefaultEmailMessages',DefaultEmailMessagesModel);
module.exports = DefaultEmailMessages;
