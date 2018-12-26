export default function reservationModel() {

    function Reservation(date, time, party, name, email, phone, message) {
        this.date = date;
        this.time = time;
        this.party = party;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.message = message;
    }

    Reservation.build = function (data) {
        return new Reservation(
            data.date,
            data.time,
            data.party,
            data.name,
            data.email,
            data.phone,
            data.message
        );
    };

    return Reservation;
}

