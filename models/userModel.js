const {Schema, model} = require('mongoose');
const userSchema = new Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    weight: { type: Number, }
})

const UserModel = model('User', userSchema);
module.exports = UserModel;