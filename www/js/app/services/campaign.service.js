/*(function () {
    'use strict';
    var serviceid = 'campaignService';
    angular.module('ionic-polistics')
		.service(serviceid,
			['$http', '$cookieStore', 'Backand', 'ApplicationValues',
			function ($http, $cookieStore, Backand, ApplicationValues) {
				var self = this;


			    return {
					readAll: readAll(self),
                    viewEvent: someFunction
			    };

			function someFunction () {
				;
			}
			
			function readAll(self) {
				return $http({
					method: 'GET',
					url: Backand.getApiUrl() + ApplicationValues.baseUrl + self.name
				}).then(function(response) {
					return response.data.data;
				});
			}

			
		}]);
})();*/