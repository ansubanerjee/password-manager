const mongoose = require('mongoose');


const PasswordSchema = new mongoose.Schema({
    Website:{
        type: String,
        required: true
    },
    UserName:{
        type: String,
        required: true,
        unique: true
    },
    Password:{
        type: String,
        required:true
    },
    User:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

})
PasswordSchema.virtual('id').get(function (){
    return this._id.toHexString()
});
PasswordSchema.set('toJSON',{
    virtuals: true,
})

exports.Order = mongoose.model('Password', PasswordSchema) 