/**
 * Created by mattomatt on 29/12/14.
 */


angular.module('map')
    .controller('MapCtrl', ['$scope','Curriculum', function ($scope,Curriculum) {
        console.log('MapCtrl');
        Curriculum.get().then(function(data)
        {
            $scope.myCoords={latitude:data.address.latitude,longitude:data.address.longitude};
            $scope.map = {center: {latitude: data.address.latitude, longitude: data.address.longitude}, zoom: 13};
        });
        $scope.icon = "img/tessera.jpg"
    }]);