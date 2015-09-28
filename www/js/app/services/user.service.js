(function () {
    'use strict';
    var serviceid = 'UserService';
    angular.module('ionic-polistics')
		.service(serviceid,
			['$http', '$cookieStore', 'Backand', 'ApplicationValues', '$location', 
			function ($http, $cookieStore, Backand, ApplicationValues, $location) {
				var self = this;

			    return {
					appName: ApplicationValues.appName,
					initUser: initUser,
					readAll: readAll,
                    signIn: signIn
			    };

				function initUser() {
					self.username = '';
					self.password = '';
				}				
					
				
				function readAll() {
					return $http({
						method: 'GET',
						url: Backand.getApiUrl() + ApplicationValues.baseUrl + self.name
					}).then(function(response) {
						return response.data.data;
					});
				}

				function signIn(username, password) {
					//set the your app name
					Backand.setAppName(ApplicationValues.appName);

					//sign in to Backand
					Backand.signin(username, password)
						.then(
						function () {
							$location.path('/');
						},
						function (data) {
							console.log(data);
							self.error = data && data.error_description || 'Unknown error from server';
						}
					);
				}
			
		}]);
})();