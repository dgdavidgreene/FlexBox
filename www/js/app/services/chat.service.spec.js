(function() {
    'use strict';
	describe( 'chats-service', function() {
		beforeEach( module( 'ionic-polistics' ) );

		it('can get an instance of ChatsService factory', inject(function (ChatsService) {
            expect(ChatsService).toBeDefined();
        }));

		
	});
})();