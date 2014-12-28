/**
 * Created by mattomatt on 17/12/14.
 */

angular.module('home')

    .controller('HomeCtrl',['$scope', function($scope) {
        console.log('HomeCtrl');

        $scope.phoneNumber="+39 347 3033083";
        $scope.emailAddress="mattomatt@gmail.com";

        $scope.callMe=function(){
            window.plugins.webintent.startActivity({
                    action: window.plugins.webintent.ACTION_CALL,
                    url: 'tel:'+$scope.phoneNumber
                },
                function(){
                    console.log('chiamata ok')
                },
                function(e){
                    console.log('errore chiamata')
                }
            );
        };

        $scope.emailMe=function(){
            window.plugins.webintent.startActivity({
                    action: window.plugins.webintent.ACTION_SENDTO,
                    url: 'mailto:'+$scope.emailAddress,
                    extras:{
                        subject:"I wanna offer you a great job!"
                    }
                },
                function(){
                    console.log('email ok')
                },
                function(e){
                    console.log('errore chiamata email')
                }
            );
        };

    }])
    .controller('MapCtrl',['$scope', function($scope) {
        console.log('MapCtrl');
        $scope.myCoords={latitude: 44.644598, longitude: 11.345068};
        $scope.map = {center: {latitude: 44.644598, longitude: 11.345068}, zoom: 13};
        $scope.icon = "img/tessera.jpg"
    }]);