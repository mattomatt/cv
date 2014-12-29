// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('curriculum', ['ionic','home','layout','map','identity','core']);

angular.module('map',['core','uiGmapgoogle-maps']);
angular.module('identity',['core']);
angular.module('home',['core']);
angular.module('core',[]);
angular.module('layout',[]);

