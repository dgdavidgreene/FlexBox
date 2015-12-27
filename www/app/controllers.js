(function() {
'use strict';

angular.module('ionic-polistics')

.controller('FriendsCtrl', function($scope, $stateParams, AnimationService) {
	var vm = this;
	vm.isExpanded = AnimationService.isExpanded;
	initialize();

    function initialize() {
		AnimationService.headerAnimatedUpFromRight();
		
    }

})

.controller('ProfileCtrl', function($scope, $stateParams, AnimationService) {
	var vm = this;
	vm.isExpanded = AnimationService.isExpanded;
	initialize();

    function initialize() {
		AnimationService.headerUpFromBottom();
    }

})

.controller('ActivityCtrl', function($scope, $stateParams, AnimationService) {
	var vm = this;
	vm.isExpanded = AnimationService.isExpanded;
	initialize();

    function initialize() {
		AnimationService.headerAnimatedUpFromLeft();
    }	

})

.controller('GalleryCtrl', function($scope, $stateParams, AnimationService) {
	var vm = this;
	vm.isExpanded = AnimationService.isExpanded;
	initialize();

    function initialize() {
		AnimationService.headerAnimatedSlideFromLeft();
    }

})

;
	
})();