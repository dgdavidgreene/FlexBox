(function() {
'use strict';

	describe('factory: Logger', function() {
		var logger, toastr, log;
		
		beforeEach( module( 'blocks.logger'));
 /**/ 
		beforeEach( module( 'blocks.logger',function($provide) {
			
			toastr = {};
			
			toastr.info = jasmine.createSpy();
			toastr.warning = jasmine.createSpy();
			toastr.error = jasmine.createSpy();
			toastr.success = jasmine.createSpy();
			
			$provide.value('toastr', toastr);	
		}));

		beforeEach(module(function ($provide) {
			// Mock $log
			$provide.value('$log', {
				log: function (msg, d, s) {
					return msg;
				},
				error: function (msg, data, s) {
					return msg;
				},
				warn: function (msg, data, s) {
					return msg;
				},
				info: function (msg, data, s) {
					return msg;
				}
			});

		}));

		beforeEach(inject(function(_logger_) {
			logger = _logger_;
		}));			
				
		it( 'should pass a dummy test', inject( function() {
			expect( true ).toBeTruthy();
		}));

		it( 'should be instantiated', inject( function() {
			expect( logger ).toBeTruthy();
		}));		

		it( 'should default to Show Messages', inject( function() {
			expect( logger.showToasts ).toBeDefined();
			expect( logger.showToasts ).toBeTruthy();
		}));			
		
		it('should be able to set toasts to not display ', function() {
			expect(logger.log).toBeDefined();
			logger.showToasts = false;
			expect( logger.showToasts ).toBeFalsy();
		});	
			
		it('should log using the log function but not toast', function() {
			var testValue;
			testValue = logger.log('Hello','','', false);
			expect(testValue).toBe('Hello');
			expect(toastr.info).not.toHaveBeenCalled();
		});

		it('should log Error using the error function and also toast', function() {
			logger.logError('testMessage','testData', 'testTitle', true);
			expect(toastr.error).toHaveBeenCalledWith('testMessage');
		});
		
		it('should log Success using the info function and also toast', function() {
			logger.logSuccess('testMessage','testData', 'testTitle', true);
			expect(toastr.success).toHaveBeenCalledWith('testMessage');
		});		

		it('should log Warning using the warning function and also toast', function() {
			logger.logWarning('testMessage','testData', 'testTitle', true);
			expect(toastr.warning).toHaveBeenCalledWith('testMessage');
		});
		
	});

}());
