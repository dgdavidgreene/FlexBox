(function() {
    'use strict';

angular.module('ionic-polistics')
    .value('ApplicationValues',
	{
		appName: 'polistics',
		baseUrl: '/1/objects/',
		menu: {
			avatar: '',
			background: '',
			expanded: true, 
			items: [
				{
					animationClass: 'animate-fade-slide-in',
					link: 'app.activity',
					title: 'Activity'
				},
				{
					animationClass: '',						
					link: 'app.login',
					title: 'Login'
				},
				{
					animationClass: 'slide-up',
					avatar: 'img/daenerys.jpg',
					background: 'img/profile-bg.jpg',
					link: 'app.profile',
					title: 'Profile'
				},
				{
					animationClass: 'animate-fade-slide-in-right',						
					link: 'app.friends',
					title: 'Friends'
				},
				{
					animationClass: 'animate-fade-slide-in',
					link: 'app.gallery',
					title: 'Gallery'
				}
			],
			menuContentExpanded: true,				
			title: 'Polistics',
			
		}		
	});


})();