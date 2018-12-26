routes.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
export default function routes ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('');

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('reservation', {
            url: '/',
            template: require('./views/reservation.html'),
            controller: 'reservationController as ctrl',
            data: {title: 'Create reservation', description: 'Reservation page'}
        })
}