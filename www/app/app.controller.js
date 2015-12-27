(function() {
'use strict';

angular.module('ionic-polistics')
.controller('AppCtrl', function($scope, $ionicModal, $ionicPopover, AnimationService) {
	var vm = this;
    // Form data for the login modal
    $scope.loginData = {};
	
	initialize();

    function initialize() {
		AnimationService.defaultSettings($scope);
    }
	

})

;
	
})();