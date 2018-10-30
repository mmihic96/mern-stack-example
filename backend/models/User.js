let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UserSchema = new Schema({
    FirstName: {
        type: String,
    },
    LastName: {
        type: String,
    },
    Username: {
        type: String
    },
    Password: {
        type: String
    }
});

let UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;