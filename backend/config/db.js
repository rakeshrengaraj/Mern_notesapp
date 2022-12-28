const mongoose = require('mongoose');
mongoose.set('strictQuery', true)

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`Connected to DB ===> ${conn.connection.host}`)
    } catch (error) {
        console.error(`DB connection error ===> ${error.message}`)
        process.exit()
    }
}

module.exports = connectDB