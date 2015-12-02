(function() {
    'use strict';
	describe( 'Animation-service', function() {
		beforeEach( module( 'ionic-polistics' ) );

		it('can get an instance of userService factory', inject(function (AnimationService) {
            expect(AnimationService).toBeDefined();
        }));

			
	});
})();