(function () {
    'use strict';
    var serviceid = 'AnimationService';
    angular.module('ionic-polistics')
		.service(serviceid,
			['$timeout', 'ionicMaterialInk', 'ionicMaterialMotion',
			function ($timeout, ionicMaterialInk, ionicMaterialMotion) {
				var vm = this;
				vm.isExpanded = false;
				vm.hasHeaderFabLeft = false;
				vm.hasHeaderFabRight = false;
			    return {
					defaultSettings: defaultSettings, //appCtrl
					headerAnimatedSlideFromLeft: headerAnimatedSlideFromLeft, //gallery - list half					
					headerAnimatedUpFromLeft: headerAnimatedUpFromLeft, //activity - item
					headerAnimatedUpFromRight: headerAnimatedUpFromRight, //friends	- list				
					headerNoneNoAnimation: headerNoneNoAnimation, //login
					headerUpFromBottom: headerUpFromBottom, //profile - hero tabs list
					isExpanded: vm.isExpanded,
					hasHeaderFabLeft: vm.hasHeaderFabLeft,
					hasHeaderFabRight: vm.hasHeaderFabRight,
					
			    };

				function defaultSettings() {
					vm.isExpanded = false;
					vm.hasHeaderFabLeft = false;
					vm.hasHeaderFabRight = false;
					
					var navIcons = document.getElementsByClassName('ion-navicon');
					for (var i = 0; i < navIcons.length; i++) {
						navIcons.addEventListener('click', function() {
							vm.classList.toggle('active');
						});
					}

				};
				
				function headerAnimatedSlideFromLeft() { // list half
					showHeader();
					clearFabs();
					vm.isExpanded = true;
					setExpanded(true);
					setHeaderFab(false);

					// Activate ink for controller
					ionicMaterialInk.displayEffect();

					ionicMaterialMotion.pushDown({
						selector: '.push-down'
					});
					ionicMaterialMotion.fadeSlideInRight({
						selector: '.animate-fade-slide-in .item'
					});				
				};
				
				function headerAnimatedUpFromLeft () { // activity - item
					showHeader();
					clearFabs();
					vm.isExpanded = true;
					setExpanded(true);
					setHeaderFab('right');

					$timeout(function() {
						ionicMaterialMotion.fadeSlideIn({
							selector: '.animate-fade-slide-in .item'
						});
					}, 200);

					// Activate ink for controller
					ionicMaterialInk.displayEffect();		
					
				};

				
				function headerNoneNoAnimation() {
					
					clearFabs();
					
					$timeout(function() {
						hideHeader();
					}, 0);
					
					ionicMaterialInk.displayEffect();
						return true;
				};
				
				function headerUpFromBottom() { // hero tabs list
					// Set Header
					showHeader();
					clearFabs();
					setHeaderFab(false);	
					vm.isExpanded = false;
					setExpanded(false);
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
				};
							
				function headerAnimatedUpFromRight() { // list 
					
					// Set Header
					showHeader();
					
					clearFabs();
					
					setHeaderFab('left');


					// Delay expansion
					$timeout(function() {
						vm.isExpanded = true;
						setExpanded(true);
					}, 300);
					

					// Set Motion
					ionicMaterialMotion.fadeSlideInRight();

					
					// Set Ink
					ionicMaterialInk.displayEffect();

				};		
				
				
				
				////////////////////////////////////////
				// Layout Methods
				////////////////////////////////////////

				function hideNavBar() {
				   document.getElementsByTagName('ion-nav-bar')[0].style.display = 'none';
				};

				function showNavBar() {
				   document.getElementsByTagName('ion-nav-bar')[0].style.display = 'block';
				};

				function noHeader() {
					var content = document.getElementsByTagName('ion-content');
					for (var i = 0; i < content.length; i++) {
						if (content[i].classList.contains('has-header')) {
							content[i].classList.toggle('has-header');
						}
					}
				};

				function setExpanded(bool) {
					vm.isExpanded = bool;
				};

				function setHeaderFab(location) {
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

					vm.hasHeaderFabLeft = hasHeaderFabLeft;
					vm.hasHeaderFabRight = hasHeaderFabRight;
				};

				function hasHeader() {
					var content = document.getElementsByTagName('ion-content');
					for (var i = 0; i < content.length; i++) {
						if (!content[i].classList.contains('has-header')) {
							content[i].classList.toggle('has-header');
						}
					}

				};

				function hideHeader() {
					hideNavBar();
					noHeader();
				};

				function showHeader() {
					showNavBar();
					hasHeader();
				};

				function  clearFabs() {
					var fabs = document.getElementsByClassName('button-fab');
					if (fabs.length && fabs.length > 1) {
						fabs[0].remove();
					}
				};
		}]);
})();