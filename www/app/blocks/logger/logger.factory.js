(function() {
    'use strict';

    angular
        .module('blocks.logger',[])
       .factory('logger', logger);

    logger.$inject = ['$log', 'toastr'];

     /**//* @ngInject *//**/
    function logger($log, toastr) {
        var service = {
            showToasts: true,
            forSource: forSource,
            log: log,
            logError: logError,
            logSuccess: logSuccess,
            logWarning: logWarning,
            setTimeOut: setTimeOut
        };

        return service;
        /*
        options = {
            tapToDismiss: true,
            toastClass: 'toast',
            containerId: 'toast-container',
            debug: false,
            fadeIn: 300,
            fadeOut: 1000,
            extendedTimeOut: 1000,
            iconClass: 'toast-info',
            positionClass: 'toast-top-right',
            timeOut: 5000, // Set timeOut to 0 to make it sticky
            titleClass: 'toast-title',
            messageClass: 'toast-message'
        };
        */
        function forSource(src) {
            return {
                log: function (m, d, s) { log(m, d, src, s); },
                logError: function (m, d, s) { logError(m, d, src, s); },
                logSuccess: function (m, d, s) { logSuccess(m, d, src, s); },
                logWarning: function (m, d, s) { logWarning(m, d, src, s); }
            };
        }

        function log(message, data, source, showToasts) {
            logIt(message, data, source, showToasts, 'info');
			return message;
        }

        function logWarning(message, data, source, showToasts) {
            logIt(message, data, source, showToasts, 'warning');
        }

        function logSuccess(message, data, source, showToasts) {
            logIt(message, data, source, showToasts, 'success');
        }

        function logError(message, data, source, showToasts) {
            logIt(message, data, source, showToasts, 'error');
        }

        function logIt(message, data, source, showToasts, toastType) {
			if (message === '; ') {
				message = 'Likely a CORS error; ';
			}
            var write = (toastType === 'error') ? $log.error : $log.log;
            source = source ? '[' + source + '] ' : '';
            write(source, message, data);
            if (showToasts) {
                if (toastType === 'error') {
                    toastr.error(message);
                } else if (toastType === 'warning') {
                    toastr.warning(message);
                } else if (toastType === 'success') {
                    toastr.success(message);
                } else {
                    toastr.info(message);
                }
            }
        }

        function setTimeOut(timeOutValue) {
            toastr.options.timeOut = timeOutValue;
        }
    } 
}());
