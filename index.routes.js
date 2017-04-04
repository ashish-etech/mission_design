var app = angular.module("missionDesign", ['ui.router']);
app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/dashboard');

    $stateProvider
        .state('register', {
            url: '/register',
            templateUrl: 'components/registration/registrationForm.html',

        })
        .state('login', {
            url: '/login',
            templateUrl: 'components/login/loginForm.html',


        })
        .state('dashboard', {

            url: '/dashboard',
            templateUrl: 'dashboard/dashboard.html',
            controller: 'dashboardController',

        })



})
