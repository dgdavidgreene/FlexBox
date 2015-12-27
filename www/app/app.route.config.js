(function() {
    'use strict';

angular.module('ionic-polistics')
	.config(appRouterConfig);
	appRouterConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];
	

	function appRouterConfig($stateProvider, $urlRouterProvider, $httpProvider) {

	    $httpProvider.interceptors.push('httpSecurityInterceptor');
		
		// Use $stateProvider to configure your states.
	    $stateProvider

          //////////
          // Home //
          //////////
		.state('app', {
				url: '/app',
				abstract: true,
				templateUrl: 'templates/menu.html',
				controller: 'AppCtrl as appController'
			})

			.state('app.activity', {
				url: '/activity',
				views: {
					'menuContent': {
						templateUrl: 'templates/activity.html',
						controller: 'ActivityCtrl as activityController'
					},
					'fabContent': {
						template: '<button id="fab-activity" class="button button-fab button-fab-top-right expanded button-energized-900 flap"><i class="icon ion-paper-airplane"></i></button>',
						controller: function ($timeout) {
							$timeout(function () {
								document.getElementById('fab-activity').classList.toggle('on');
							}, 200);
						}
					}
				}
			})

			.state('app.friends', {
				url: '/friends',
				views: {
					'menuContent': {
						templateUrl: 'templates/friends.html',
						controller: 'FriendsCtrl as friendsController'
					},
					'fabContent': {
						template: '<button id="fab-friends" class="button button-fab button-fab-top-left expanded button-energized-900 spin"><i class="icon ion-chatbubbles"></i></button>',
						controller: function ($timeout) {
							$timeout(function () {
								document.getElementById('fab-friends').classList.toggle('on');
							}, 900);
						}
					}
				}
			})

			.state('app.gallery', {
				url: '/gallery',
				views: {
					'menuContent': {
						templateUrl: 'templates/gallery.html',
						controller: 'GalleryCtrl as galleryController'
					},
					'fabContent': {
						template: '<button id="fab-gallery" class="button button-fab button-fab-top-right expanded button-energized-900 drop"><i class="icon ion-heart"></i></button>',
						controller: function ($timeout) {
							$timeout(function () {
								document.getElementById('fab-gallery').classList.toggle('on');
							}, 600);
						}
					}
				}
			})

			.state('app.login', {
				url: '/login',
				views: {
					'menuContent': {
						templateUrl: 'app/login/login.html',
						controller: 'LoginCtrl as loginController'
					},
					'fabContent': {
						template: ''
					}
				}
			})

			.state('app.profile', {
				url: '/profile',
				views: {
					'menuContent': {
						templateUrl: 'templates/profile.html',
						controller: 'ProfileCtrl as profileController'
					},
					'fabContent': {
						template: '<button id="fab-profile" class="button button-fab button-fab-bottom-right button-energized-900"><i class="icon ion-plus"></i></button>',
						controller: function ($timeout) {
							$timeout(function () {
								document.getElementById('fab-profile').classList.toggle('on');
							}, 800);
						}
					}
				}
			})
			;

			// if none of the above states are matched, use this as the fallback
			$urlRouterProvider.otherwise('/app/login');
	
	}
	
})();