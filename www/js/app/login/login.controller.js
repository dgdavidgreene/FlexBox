(function() {
'use strict';

angular.module('ionic-polistics')
.controller('LoginCtrl', function($scope, $timeout, $stateParams, ionicMaterialInk, UserService) {
	var vm = this;
    $scope.$parent.clearFabs();
    $timeout(function() {
        $scope.$parent.hideHeader();
    }, 0);
    ionicMaterialInk.displayEffect();
	UserService.initUser();
	vm.signIn = UserService.signIn;
	
})

;
	
})();