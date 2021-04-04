const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connection.on('connected', function () {
    console.log('Mongoose connected');
});
mongoose.connection.on('error', function (err) {
    console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected');
});

module.exports.connect = async () => {
    const url = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/sample';
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };

    await mongoose.connect(url, options);
    mongoose.connection.set('maxTimeMS', 100)
}
