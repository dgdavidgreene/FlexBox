(function() {
    'use strict';
	describe( 'campaign-service', function() {
		beforeEach( module( 'ionic-polistics' ) );

		it('can get an instance of campaignService factory', inject(function (campaignService) {
            expect(campaignService).toBeDefined();
        }));

		
	});
})();