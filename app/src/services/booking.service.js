export default class BookingService {

    constructor($http, Reservation) {
        "ngInject";
        this.$http = $http;
        this.Reservation = Reservation;
    }

    createReservation(formData) {
        let reservation = this.Reservation.build(formData);

        return this.$http.post('/api/reservation', reservation);
    }
}
