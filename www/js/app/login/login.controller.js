(function() {
'use strict';

angular.module('ionic-polistics')
.controller('LoginCtrl', function($scope, $stateParams, AnimationService) { //, UserService
	var vm = this;

	vm.signIn = function() {
		/*UserService.signIn("dgdavidgreene@yahoo.com", "pa55w0rd");*/
		console.log('Doing login', vm.username);
	} 
	
	
	initialize();

    function initialize() {
		AnimationService.headerNoneNoAnimation($scope);
    }

})

;
	
})();