(function() {
    'use strict';
	describe( 'router', function() {
		beforeEach( module( 'blocks.router' ) );

		it( 'should pass a dummy test', inject( function() {
			expect( true ).toBeTruthy();
		}));
	});
})();