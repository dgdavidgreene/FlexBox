(function() {
    'use strict';
	describe( 'exception', function() {
		beforeEach( module( 'blocks.exception' ) );

		it( 'should pass a dummy test', inject( function() {
			expect( true ).toBeTruthy();
		}));
	});
})();