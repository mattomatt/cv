/**
 * Created by mattomatt on 29/12/14.
 */

angular.module('core')
    .factory('Curriculum', ['$http','$q', function ($http,$q) {
        var cvService = {};

        cvService.get = function () {
            var deferred = $q.defer();

            $http.get('data/cv.json')
                .success(function(data){
                    deferred.resolve(data);
                })
                .error(function(error){
                    deferred.reject(error);
                });

            return deferred.promise;
        };

        return cvService;
    }
    ]);


