(function () {
    'use strict';
    var serviceid = 'AnimationService';
    angular.module('ionic-polistics')
		.service(serviceid,
			['$timeout', 'ionicMaterialInk', 'ionicMaterialMotion',
			function ($timeout, ionicMaterialInk, ionicMaterialMotion) {
				var self = this;

			    return {
					defaultSettings: defaultSettings, //appCtrl
					headerAnimatedSlideFromLeft: headerAnimatedSlideFromLeft, //gallery - list half					
					headerAnimatedUpFromLeft: headerAnimatedUpFromLeft, //activity - item
					headerAnimatedUpFromRight: headerAnimatedUpFromRight, //friends	- list				
					headerNoneNoAnimation: headerNoneNoAnimation, //login
					headerUpFromBottom: headerUpFromBottom, //profile - hero tabs list
			    };

			function defaultSettings(scope) {
				var vm = this;
				scope.isExpanded = false;
				scope.hasHeaderFabLeft = false;
				scope.hasHeaderFabRight = false;
				
				var navIcons = document.getElementsByClassName('ion-navicon');
				for (var i = 0; i < navIcons.length; i++) {
					navIcons.addEventListener('click', function() {
						vm.classList.toggle('active');
					});
				}

				////////////////////////////////////////
				// Layout Methods
				////////////////////////////////////////

				scope.hideNavBar = function() {
				   document.getElementsByTagName('ion-nav-bar')[0].style.display = 'none';
				};

				scope.showNavBar = function() {
				   document.getElementsByTagName('ion-nav-bar')[0].style.display = 'block';
				};

				scope.noHeader = function() {
					var content = document.getElementsByTagName('ion-content');
					for (var i = 0; i < content.length; i++) {
						if (content[i].classList.contains('has-header')) {
							content[i].classList.toggle('has-header');
						}
					}
				};

				scope.setExpanded = function(bool) {
					scope.isExpanded = bool;
				};

				scope.setHeaderFab = function(location) {
					var hasHeaderFabLeft = false;
					var hasHeaderFabRight = false;

					switch (location) {
						case 'left':
							hasHeaderFabLeft = true;
							break;
						case 'right':
							hasHeaderFabRight = true;
							break;
					}

					scope.hasHeaderFabLeft = hasHeaderFabLeft;
					scope.hasHeaderFabRight = hasHeaderFabRight;
				};

				scope.hasHeader = function() {
					var content = document.getElementsByTagName('ion-content');
					for (var i = 0; i < content.length; i++) {
						if (!content[i].classList.contains('has-header')) {
							content[i].classList.toggle('has-header');
						}
					}

				};

				scope.hideHeader = function() {
					scope.hideNavBar();
					scope.noHeader();
				};

				scope.showHeader = function() {
					scope.showNavBar();
					scope.hasHeader();
				};

				scope.clearFabs = function() {
					var fabs = document.getElementsByClassName('button-fab');
					if (fabs.length && fabs.length > 1) {
						fabs[0].remove();
					}
				};
			}
			
			function headerAnimatedSlideFromLeft(scope) { // list half
				scope.$parent.showHeader();
				scope.$parent.clearFabs();
				scope.isExpanded = true;
				scope.$parent.setExpanded(true);
				scope.$parent.setHeaderFab(false);

				// Activate ink for controller
				ionicMaterialInk.displayEffect();

				ionicMaterialMotion.pushDown({
					selector: '.push-down'
				});
				ionicMaterialMotion.fadeSlideInRight({
					selector: '.animate-fade-slide-in .item'
				});				
			}
			
			function headerAnimatedUpFromLeft (scope) { // item
				scope.$parent.showHeader();
				scope.$parent.clearFabs();
				scope.isExpanded = true;
				scope.$parent.setExpanded(true);
				scope.$parent.setHeaderFab('right');

				$timeout(function() {
					ionicMaterialMotion.fadeSlideIn({
						selector: '.animate-fade-slide-in .item'
					});
				}, 200);

				// Activate ink for controller
				ionicMaterialInk.displayEffect();		
				
			}

			
			function headerNoneNoAnimation(scope) {
				
				scope.$parent.clearFabs();
				
				$timeout(function() {
					scope.$parent.hideHeader();
				}, 0);
				
				ionicMaterialInk.displayEffect();
					return true;
			}
			
			function headerUpFromBottom(scope) { // hero tabs list
				// Set Header
				scope.$parent.showHeader();
				scope.$parent.clearFabs();
				scope.$parent.setHeaderFab(false);	
				scope.isExpanded = false;
				scope.$parent.setExpanded(false);
				// Set Motion
				$timeout(function() {
					
					ionicMaterialMotion.slideUp({
						selector: '.slide-up'
					});
				}, 300);

				$timeout(function() {
					ionicMaterialMotion.fadeSlideInRight({
						startVelocity: 3000
					});
				}, 700);


				// Set Ink
				ionicMaterialInk.displayEffect();				
			}
						
			function headerAnimatedUpFromRight(scope) { // list 
				
				// Set Header
				scope.$parent.showHeader();
				
				scope.$parent.clearFabs();
				
				scope.$parent.setHeaderFab('left');


				// Delay expansion
				$timeout(function() {
					scope.isExpanded = true;
					scope.$parent.setExpanded(true);
				}, 300);
				

				// Set Motion
				ionicMaterialMotion.fadeSlideInRight();

				
				// Set Ink
				ionicMaterialInk.displayEffect();

			}		
			
		}]);
})();