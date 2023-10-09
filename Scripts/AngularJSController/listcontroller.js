(function () {
    'use strict';
    //debugger
    angular
        .module('app')
        .controller('ListController', ListController);

    ListController.$inject = ['$rootScope', '$scope', '$location', '$window'];
    function ListController($rootScope, $scope, $location, $window) {
        debugger
      
        var vm = this;
        vm.itemList = [];
        vm.totalPrice = 0;
        var shopItemString = $window.localStorage.getItem('GrantItem');
       // debugger
        if (shopItemString) {
            
            vm.shopItem = JSON.parse($window.localStorage.getItem('GrantItem'));
            vm.shopItem.forEach(myFunction);

            function myFunction(item) {
                vm.totalPrice += item.price;
            }
        vm.shopItem = vm.shopItem.filter(function (item, index, self) {
            return index === self.findIndex(function (t) {
                return t.price === item.price; // Replace 'name' with a unique identifier property
            });
        });
        } else {
            vm.shopItem = []; 
        }
       
        vm.shoppingCartItem = [];
        vm.itemList = [
            {
                "name": "Cheese Cake",
                "description": "Japanese style special Cake with strawberry cream",
                "price": 11,
                "supplier": [{
                    "item": "Cheese Cake",
                    "description": "Japanese style special Cake with strawberry cream",
                    "price": 12,
                    "available": true,
                }],
                "available": true,
                "itemcount": 6
            },
            {
                "name": "Cheese Cake",
                "description": "Japanese style special Cake with strawberry cream",
                "price": 12,
                "supplier": [{
                    "item": "Cheese Cake",
                    "description": "Japanese style special Cake with strawberry cream",
                    "price": 12,
                    "available": true,
                }],
                "available": true,
                "itemcount": 7
            },
            {
                "name": "Cheese Cake",
                "description": "Japanese style special Cake with strawberry cream",
                "price": 13,
                "supplier": [{
                    "item": "Cheese Cake",
                    "description": "Japanese style special Cake with strawberry cream",
                    "price": 12,
                    "available": true,
                }],
                "available": true,
                "itemcount": 8
            },
            {
                "name": "Cheese Cake",
                "description": "Japanese style special Cake with strawberry cream",
                "price": 14,
                "supplier": [{
                    "item": "Cheese Cake",
                    "description": "Japanese style special Cake with strawberry cream",
                    "price": 12,
                    "available": true,
                }],
                "available": true,
                "itemcount": 9
            },
            {
                "name": "Cheese Cake",
                "description": "Japanese style special Cake with strawberry cream",
                "price": 15,
                "supplier": [{
                    "item": "Cheese Cake",
                    "description": "Japanese style special Cake with strawberry cream",
                    "price": 12,
                    "available": true,
                }],
                "available": true,
                "itemcount": 10
            }
        ];        
        vm.addToCart = addToCart;      

        function addToCart(item) {
            vm.shoppingCartItem.push(item);
            $window.localStorage.setItem('GrantItem', JSON.stringify(vm.shoppingCartItem));           
            console.log("itemm local", $window.localStorage.getItem('GrantItem'));
        }

        vm.shoppingCart = function () {
            vm.shopItem = $window.localStorage.getItem('GrantItem')
        }
        vm.checkout = function () {
            //debugger
            vm.shopItem = JSON.parse($window.localStorage.getItem('GrantItem'));

            vm.shopItem = vm.shopItem.filter(function (item, index, self) {
                return index === self.findIndex(function (t) {
                    return t.price === item.price; // Replace 'name' with a unique identifier property
                });
            });

            console.log("local storage from check", $window.localStorage.getItem('GrantItem'));
            $location.path('/checkout');
            console.log("check");
            console.log("local storage from check", $window.localStorage.getItem('GrantItem'));
            vm.isCheckoutPage = true;
          
        };

       

        vm.backToList = function () {
            $location.path('/list');
            vm.isCheckoutPage = false;
        };
        vm.logout = function () {
            debugger
            vm.logoutSuccess = localStorage.removeItem('GrantItem');
        }
        vm.getTotalPrice = function () {
            vm.getTotalPrice = $window.localStorage.getItem('GrantItem')           
        };
        vm.confirmCheckout = function () {
            $location.path('/checkoutsuccess');
            vm.successMsg = '';   
            localStorage.removeItem('GrantItem');
        };
    }
})();
