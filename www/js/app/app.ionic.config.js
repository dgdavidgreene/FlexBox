(function() {
    'use strict';
// Ionic ionic-polistics App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'ionic-polistics' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'ionic-polistics.controllers' is found in controllers.js
angular.module('ionic-polistics')
.config(function($ionicConfigProvider) {

    // Turn off caching for demo simplicity's sake
    $ionicConfigProvider.views.maxCache(0);

    /*
    // Turn off back button text
    $ionicConfigProvider.backButton.previousTitleText(false);
    */ 


}); 



	
})();