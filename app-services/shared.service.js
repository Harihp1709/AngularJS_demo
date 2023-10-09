angular.module('app').factory('ShoppingCartService', ['$rootScope', function ($rootScope) {
    $rootScope.shoppingCart = [];
    var shoppingCart = [];
    //debugger
    function addToCart(item) {
        shoppingCart.push(item);
        console.log(shoppingCart);
    }

    function deleteFromCart(index) {
        shoppingCart.splice(index, 1);
    }

    function getTotalPrice() {
        var totalPrice = 0;
        shoppingCart.forEach(function (item) {
            totalPrice += Number(item.price);
        });
        return totalPrice;
    }

    function clearCart() {
        shoppingCart = [];
    }

    return {
        shoppingCart: shoppingCart,
        addToCart: addToCart,
        deleteFromCart: deleteFromCart,
        getTotalPrice: getTotalPrice,
        clearCart: clearCart
    };
}]);

//(function () {
//    'use strict';

//    angular
//        .module('app')
//        .factory('SharedService', SharedService);

//    SharedService.$inject = ['$http'];
//    function SharedService($http) {
//        var service = {};
//        var sharedData = [];
//       var totalPrice = 0;
//    service.getSharedData = getSharedData;
//    service.setSharedData = setSharedData;
//    service.getTotalPrice = getTotalPrice;
//    service.setTotalPrice = setTotalPrice;

//    getSharedData: function() {
//      return sharedData;
//    }
//    setSharedData: function(data) {
//      sharedData = data;
//      console.log("Shared data set's success");
//    }
//    getTotalPrice: function(){
//    return totalPrice;
//    }
//    setTotalPrice : function(price){
//    totalPrice = price;
//    }
//  };
//});