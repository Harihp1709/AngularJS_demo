//function ShoppingCartController($rootScope, $scope, $location, $http, SharedService, $window) {
//    var vm = this;
//    debugger
//    vm.isCheckoutPage = false;
//    SharedService.setSharedData(SharedService.getSharedData() || []);
//    SharedService.setTotalPrice(0);
//    $rootScope.$on('validUser', function (event, user) {
//        vm.validUser = user;
//        console.log(user);
//    });

//    $scope.$watch(function () {
//        return SharedService.getSharedData();
//    }, function () {
//        SharedService.setTotalPrice(0);
//        vm.getTotalPrice();
//        console.log('changed');
//    }, true);

//    vm.checkout = function () {
//        $location.path('/checkout');        
//        console.log("check");
//        console.log("local storage from check", $window.localStorage.getItem('GrantItem'))
//        vm.isCheckoutPage = true;
//    };

//    vm.deleteFromCart = function (index) {
//        SharedService.getSharedData().splice(index, 1);
//    };

//    vm.backToList = function () {
//        $location.path('/list');
//        vm.isCheckoutPage = false;
//    };

//    vm.getTotalPrice = function () {
//        vm.getTotalPrice = $window.localStorage.getItem('GrantItem')
//        SharedService.getSharedData().forEach(function (item) {
//            SharedService.setTotalPrice(SharedService.getTotalPrice() + Number(item.price));
//        });
//    };

//    vm.confirmCheckout = function () {
//        $location.path('/checkoutsuccess');
//        vm.successMsg = '';
//        vm.successMsg = SharedService.getSharedData().length + ' Items' + ' @ $' + SharedService.getTotalPrice();
//        console.log(vm.successMsg);
//        SharedService.setSharedData([]);
//    };
//}



////(function () {
////    'use strict';
////    debugger
////    angular
////        .module('app')
////        .controller('ShoppingCartController', ShoppingCartController);

////    ShoppingCartController.$inject = ['$rootScope', '$scope', '$location', '$http', 'SharedService'];
////    function ShoppingCartController($rootScope, $scope, $location, $http, SharedService) {
////        debugger
////        var vm = this;

////        vm.isCheckoutPage = false;
////        sharedValue
////        $rootScope.shoppingCart = $rootScope.shoppingCart || [];
////        $rootScope.shoppingCart.totalPrice = 0;
////        $rootScope.$on('validUser', function (event, user) {
////            vm.validUser = user;
////            console.log(user);
////        });

////        $scope.$watch('vm.shoppingCart', function () {
////            $rootScope.shoppingCart.totalPrice = 0;
////            vm.getTotalPrice();
////            console.log('changed');
////        }, true);

////        vm.checkout = function () {
////            $location.path('/checkout');
////            vm.isCheckoutPage = true;
////        };

////        vm.deleteFromCart = function (index) {
////            $rootScope.shoppingCart.splice(index, 1);
////        };

////        vm.backToList = function () {
////            $location.path('/list');
////            vm.isCheckoutPage = false;
////        };

////        vm.getTotalPrice = function () {
////            $rootScope.shoppingCart.forEach(function (item) {
////                $rootScope.shoppingCart.totalPrice += Number(item.price);
////            });
////        };

////        vm.confirmCheckout = function () {
////            $location.path('/checkoutsuccess');
////            vm.successMsg = '';
////            vm.successMsg = $rootScope.shoppingCart.length + ' Items' + ' @ $' + $rootScope.shoppingCart.totalPrice;
////            console.log(vm.successMsg);
////            $rootScope.shoppingCart = [];
////        };
////    }

////})
////()