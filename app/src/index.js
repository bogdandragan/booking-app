const angular = require('angular');
const uirouter = require('angular-ui-router').default;

import routes from './routes.js'
import reservationModel from './models/reservation.model.js'
import BookingService from './services/booking.service'
import ReservationController from './controllers/reservation.controller'

import './assets/sass/main.scss';

const app = angular.module('booking-app',[uirouter])
    .config(routes)
    .factory('Reservation', reservationModel)
    .service('BookingService', BookingService)
    .controller('reservationController', ReservationController);
