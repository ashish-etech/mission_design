var app = angular.module("mission_design",['ui.router']);
app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');

    $stateProvider        
        .state('login', {
            url: '/login',
            templateUrl: 'login/login.html',
            controller: 'loginController',
        })
        .state('header', {
            url: '/header',
            templateUrl: 'header/header.html',
            controller: 'headerController',
        })
})
