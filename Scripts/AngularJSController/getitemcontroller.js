(function () {6
    'use strict';
    //debugger
    angular
        .module('app')
        .controller('GetItemController', GetItemController);

    GetItemController.$inject = ['$location', '$window'];
    function GetItemController($location, $window) {
       // debugger

        var vm = this;
        vm.items = [];
        debugger
        vm.items = $window.localStorage.getItem('GrantItem')
         console.log("itemm local", $window.localStorage.getItem('GrantItem'));
        vm.getItems = getItems;

        function getItems() {
            //debugger
            vm.items = $window.localStorage.getItem('GrantItem')
            console.log("itemm local", vm.items);        
        };
         
}
}) ();