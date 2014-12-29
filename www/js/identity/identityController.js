/**
 * Created by mattomatt on 29/12/14.
 */

angular.module('identity')
    .controller('IdentityCtrl', ['$scope','Curriculum', function ($scope,Curriculum) {
        console.log('IdentityCtrl');
        Curriculum.get().then(function(data)
        {
            $scope.cv=data;
        });
    }]);