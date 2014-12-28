/**
 * Created by mattomatt on 17/12/14.
 */

angular.module('curriculum').config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $stateProvider.
            state('app', {
                //url:'/app',
                abstract: true,
                templateUrl: 'js/layout/_layout.html',
                controller: 'AppCtrl'
            }).
            state('app.home', {
                url: '/home',
                views: {
                    'mainArea': {
                        templateUrl: 'js/home/_home.html',
                        controller: 'HomeCtrl'
                    }
                }
            }).
            state('app.fotoFull', {
                url: '/fotoFull',
                views: {
                    'mainArea': {
                        templateUrl: 'js/home/_fotoFull.html'
                    }
                }
            }).
            state('app.map', {
                url: '/map',
                views: {
                    'mainArea': {
                        templateUrl: 'js/home/_map.html',
                        controller: 'MapCtrl'

                    }
                }
            })
        ;
        $urlRouterProvider.otherwise('/home');
    }]);