const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
    userId: ObjectId,
    gender: { type: String, enum: ['male', 'female'] },
    address: { type: String },
    firstname: { type: String },
    lastname: { type: String },
    mobileNo: { type: Number, min: 10, max: 10 },
    DOB: { type: Date, default: Date.now }
});

userSchema.index(
    { userId: 1 },
    { mobileNo: 1 }
)


userSchema.methods.fullname = function () {
  
    return this.firstname + ' ' + this.lastname;
}

userSchema.methods.isUserAdult = function () {
    return this.DOB - Date.now() > 18  ? true : false;
}


const userModel = mongoose.model('user', userSchema);

module.exports = { userModel, userSchema }