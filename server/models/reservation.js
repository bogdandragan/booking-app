const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reservationSchema = new Schema({
    date : Date,
    party: Number,
    name: String,
    email: String,
    phone: String,
    message: String
});

module.exports = mongoose.model('Reservation', reservationSchema);