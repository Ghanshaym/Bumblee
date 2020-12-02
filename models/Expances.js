const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const encrypt = require('bcrypt');
const ExpancesModel = new Schema({
   
    type:{type:String,default:''},
    description:{type:String,default:''},
    adminId: {
        type: Schema.Types.ObjectId,
        ref: 'Admin'
    },
    price:{
        type:Number,
        default:0.0
    }
}, {
    timestamps: true,
    toObject: {virtuals: true},
    toJSON: {virtuals: true}
});


const Borrower = mongoose.model('Expances', ExpancesModel);
module.exports = Borrower;
