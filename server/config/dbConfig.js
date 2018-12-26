const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/booking', {});
mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.on('error', function(err){
    console.log("DB connection error!!! "+err);
});
db.once('open', function(){
    console.log("connected to DB");
});