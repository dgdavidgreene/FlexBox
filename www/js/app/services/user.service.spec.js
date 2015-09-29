(function() {
    'use strict';
	describe( 'User-service', function() {
		beforeEach( module( 'ionic-polistics' ) );

		it('can get an instance of userService factory', inject(function (UserService) {
            expect(UserService).toBeDefined();
        }));

		it('can get an instance of userService factory', inject(function (UserService) {
            expect(UserService.initUser).toBeDefined();
        }));		
	});
})();