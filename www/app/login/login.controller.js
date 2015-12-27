(function () {
    'use strict';

    angular.module('ionic-polistics')
    .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$scope', '$stateParams', 'AnimationService', 'UserService'];

    function LoginCtrl($scope, $stateParams, AnimationService, UserService) {
        var vm = this;

		vm.signIn = function() {
			UserService.signIn("dgdavidgreene@yahoo.com", "pa55w0rd");
			console.log('Doing login with ', vm.username + ' ' + vm.password);
			
		} 
		
		
		initialize();

		function initialize() {
			AnimationService.headerNoneNoAnimation($scope);
		}

	};
})();