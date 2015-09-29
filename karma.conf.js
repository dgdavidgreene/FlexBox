// Karma configuration
// COPIED from different project

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [

		'www/lib/ionic/js/ionic.bundle.js',
		'node_modules/angular-mocks/angular-mocks.js', // # For testing with Karma
		'www/lib/ionic/js/ionic.js',
		'www/lib/ionic/js/ionic-angular.js',
		'www/lib/ionic-material/dist/ionic.material.js',
		'www/lib/ion-md-input/js/ion-md-input.js',
		//'www/lib/waves/dist/waves.js',
		'www/lib/ionic/js/angular/angular-cookies.js',
		'www/lib/ionic/js/angular/angular-resource.js',
		'www/lib/ionic/js/angular/angular-local-storage.js',
		'www/lib/backand/backand.1.8.0.min.js',
		'www/js/app/app.js',
		
		'www/js/app/**/*.js'


    ],


    // list of files to exclude
    exclude: [
    ],

	// 7/14/15
	plugins: [
		'karma-jasmine',
		'karma-phantomjs-launcher',
		'karma-chrome-launcher'//,
		//'karma-ng-html2js-preprocessor'
	],
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
		
    },



    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome', 'PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
