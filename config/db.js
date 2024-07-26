const mongoose = require('mongoose');

const local = "mongodb+srv://hienph32983:hienokph32983@cluster0.kevxigz.mongodb.net/md18402";

const connect = async () => {
    try {
        await mongoose.connect(local);
        console.log('Connect success');
    } catch (error) {
        console.error('Connection to MongoDB failed:', error);
    }
}

module.exports = { connect };
