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

	vm.signIn = UserService.signIn("dgdavidgreene@yahoo.com", "pa55w0rd");
	vm.name = "Mike";
	$scope.scopeVar = "there";
})

;
	
})();