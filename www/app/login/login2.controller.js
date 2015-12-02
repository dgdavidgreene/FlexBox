(function() {
'use strict';

angular.module('ionic-polistics')
.controller('LoginCtrl2', function($scope, $stateParams, AnimationService) { //, UserService
	var vm = this;

	vm.signIn = function() {
		/*UserService.signIn("dgdavidgreene@yahoo.com", "pa55w0rd");*/
		console.log('Doing login', vm.password);
	} 
	
	
	initialize();

    function initialize() {
		AnimationService.headerNoneNoAnimation($scope);
    }

})

;
	
})();