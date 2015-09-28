(function() {
  'use strict';
  angular.module('ionic-polistics.interceptors', [])
    .factory('httpSecurityInterceptor', ['$q', '$location', httpSecurityInterceptor]);
	
  function httpSecurityInterceptor($q, $location) {
    return {

      requestError: function(rejection) {
        return $q.reject(rejection);
      },
      response: function(response) {
        return response;
      },
      responseError: function(rejection) {
        //if not sign in screen :
        if ((rejection.config.url+"").indexOf('token') === -1){
          if (rejection.status === 401) {
            $location.path('/login');
          }
        }
        return $q.reject(rejection);
      }
    };
  }


})();