const db = require('../db.js')

const Schema = db.Schema

const UserSchema = new Schema({
 name: String,
 token: String
})

const User = db.model('User', UserSchema);

export default User
