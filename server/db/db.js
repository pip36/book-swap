require('dotenv').config()
const mongoose = require('mongoose').connect(process.env.MONGO_DB_URL)

export default mongoose
