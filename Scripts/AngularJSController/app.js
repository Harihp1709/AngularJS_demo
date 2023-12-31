﻿(function () {
    'use strict';
     angular
        .module('app', ['ngRoute', 'ngCookies'])
        .config(config)
        .run(run);

    config.$inject = ['$routeProvider', '$locationProvider'];
    //debugger
    function config($routeProvider, $locationProvider) {
        
        //debugger
        $routeProvider
            .when('/', {
                controller: 'HomeController',
                templateUrl: 'home/home.view.html',
                controllerAs: 'vm'
            })
            .when('/login', {
                controller: 'LoginController',
                templateUrl: 'login/login.view.html',
                controllerAs: 'vm'
            })
            .when('/register', {
                controller: 'RegisterController',
                templateUrl: 'register/register.view.html',
                controllerAs: 'vm'
            })
            .when('/list', {
                controller: 'ListController',
                templateUrl: 'list/list.view.html',
                controllerAs: 'vm'
            })
            .when('/shoppingcart', {
            templateUrl: 'shoppingCart.html',
                controller: 'ListController',
                controllerAs: 'vm'
            })
            .when('/checkout', {
                templateUrl: 'checkout/checkout.html',
                controller: 'ListController',
                controllerAs: 'vm'
            })
            .when('/checkoutsuccess', {
                templateUrl: 'checkoutsuccess/checkoutSuccess.html',
                controller: 'ListController',
                controllerAs: 'vm'
            })
            .otherwise({ redirectTo: '/login' });
    }

    run.$inject = ['$rootScope', '$location', '$cookies', '$http'];
    function run($rootScope, $location, $cookies, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookies.getObject('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
        }

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path('/login');
            }
        });
    }
})();