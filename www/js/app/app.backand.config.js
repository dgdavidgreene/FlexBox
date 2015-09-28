(function() {
    'use strict';

angular.module('ionic-polistics')
  .config(['$httpProvider', 'BackandProvider', function($httpProvider, BackandProvider) {
    BackandProvider.manageDefaultHeaders();
    //BackandProvider.setAnonymousToken('Your Anonymous Token');
    //BackandProvider.setSignUpToken('Your SignUp Token');

}]); 



	
})();
