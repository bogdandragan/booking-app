export default class ReservationController {

    constructor(BookingService){
        "ngInject";
        this.bookingService = BookingService;
        this.showMsgField = false;
    }

    createReservation(form){
        this.requestError = false;
        this.requestSuccess = false;

        if(!form.$valid) {
            return false;
        }

        this.bookingService.createReservation(this.reservationForm)
        .then((data)=>{
                this.requestError = false;
                this.requestSuccess = true;
                this.reservationForm = {};
                form.$setPristine();
                form.$setUntouched();
                form.$submitted = false;
            },(error)=>{
                if(error.status == 429){
                    this.requestSuccess = false;
                    alert("Unfortunately, you are trying to make reservations too often");
                }else{
                    this.requestError = true;
                    this.requestSuccess = false;
                    this.requestResult = error;
                }
            });
    }
}
