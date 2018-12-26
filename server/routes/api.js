const express = require('express');
const router = express.Router();
const Reservation = require('../models/reservation');
const validate = require('express-validation');
const reservationValidation = require('../validation/reservation.js');

/* GET api listing. */
router.get('/', (req, res) => {
    res.send('api works');
});

router.get('/reservations', (req, res) => {
    console.log('list all reservations');
    Reservation.find({}, function(err, data) {
        if(err){
            res.status(500);
            res.send(err);
        }
        res.send({reservations: data});
    });
});

router.post('/reservation', validate(reservationValidation.create), (req, res) => {
    console.log(req.body);

    console.log('create reservation works');

    //create full date based on date and time
    let date = req.body.date.split('T')[0];
    let time = req.body.time.split('T')[1];
    let fullDate = date+'T'+time;

    //save reservation into DB
    let reservation = new Reservation();

    reservation.date = fullDate;
    reservation.party = req.body.party;
    reservation.name = req.body.name;
    reservation.email = req.body.email;
    reservation.phone = req.body.phone;
    reservation.message = req.body.message;

    reservation.save(function(err){
        if(err){
            console.log(err)
            res.status(500);

            res.send(err);
        }
        res.send({ type: "ok" });
    })
});

module.exports = router;