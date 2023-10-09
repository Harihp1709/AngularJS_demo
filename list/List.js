var app = angular.module('myApp', []);

app.controller('myCtrl', function ($scope, $http, $rootScope) {

    $scope.listOrder = "name";
    $scope.init = function () {
        $scope.itemList = {};
        $scope.itemList = [
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
        ];

    };

    $scope.addToCart = function (item) {
        $rootScope.shoppingCart.push(item);
        console.log($rootScope.shoppingCart);
    };

 
}
)
