(function () {
    'use strict';
    //debugger
    angular
        .module('app')
        .controller('ListController', ListController);

    ListController.$inject = [ '$rootScope', '$Scope'];
    function ListController($Scope, $rootScope) {
        var vm = this;
        debugger
        vm.itemList = $scope.itemList = [
            {
                "username": "123", "password": "123",
                "shoppingcart": [{
                    "item": "Cheese Cake",
                    "description": "Japanese style special Cake with strawberry cream",
                    "price": 12,
                    "available": true,
                },
                {
                    "item": "Cheese Cake",
                    "description": "Japanese style special Cake with strawberry cream",
                    "price": 12,
                    "available": true,
                }]
            },
            {
                "username": "123", "password": "123",
                "shoppingcart": [{
                    "item": "Cheese Cake",
                    "description": "Japanese style special Cake with strawberry cream",
                    "price": 12,
                    "available": true,
                },
                {
                    "item": "Cheese Cake",
                    "description": "Japanese style special Cake with strawberry cream",
                    "price": 12,
                    "available": true,
                }]
            }
        ];;
    }

})();