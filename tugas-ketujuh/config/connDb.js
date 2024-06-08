const mongoose = require('mongoose');
const env = require('./env');
const connDb = async () => {
    try {
        await mongoose.connect(env.DB_URL);
        console.log('Database connected');
    } catch (error) {
        console.log('Database connection failed');
    }
}

module.exports = connDb;