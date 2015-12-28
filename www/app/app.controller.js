(function() {
'use strict';

angular.module('ionic-polistics')
.controller('AppCtrl', function($scope, $ionicModal, $ionicPopover, AnimationService) {
	var vm = this;

	initialize();

    function initialize() {
		AnimationService.defaultSettings($scope);
    }
	

})

;
	
})();