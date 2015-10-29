(function() {
'use strict';

angular.module('ionic-polistics')

.controller('FriendsCtrl', function($scope, $stateParams, AnimationService) {

	initialize();

    function initialize() {
		AnimationService.headerAnimatedUpFromRight($scope);
    }

})

.controller('ProfileCtrl', function($scope, $stateParams, AnimationService) {
   

	initialize();

    function initialize() {
		AnimationService.headerUpFromBottom($scope);
    }

})

.controller('ActivityCtrl', function($scope, $stateParams, AnimationService) {
	
	initialize();

    function initialize() {
		AnimationService.headerAnimatedUpFromLeft($scope);
    }	

})

.controller('GalleryCtrl', function($scope, $stateParams, AnimationService) {
	initialize();

    function initialize() {
		AnimationService.headerAnimatedSlideFromLeft($scope);
    }

})

;
	
})();