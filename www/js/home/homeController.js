/**
 * Created by mattomatt on 17/12/14.
 */

angular.module('home')
    .controller('HomeCtrl', ['$scope','Curriculum', function ($scope,Curriculum) {
        console.log('HomeCtrl');
        Curriculum.get().then(function(data)
        {
            $scope.cv=data;
        });


        $scope.callMe = function () {
            window.plugins.webintent.startActivity({
                    action: window.plugins.webintent.ACTION_CALL,
                    url: 'tel:' + cv.phoneNumber
                },
                function () {
                    console.log('chiamata ok')
                },
                function (e) {
                    console.log('errore chiamata')
                }
            );
        };
        $scope.emailMe = function () {
            window.plugins.webintent.startActivity({
                    action: window.plugins.webintent.ACTION_SENDTO,
                    url: 'mailto:' + cv.emailAddress,
                    extras: {
                        subject: "I wanna offer you a great job!"
                    }
                },
                function () {
                    console.log('email ok')
                },
                function (e) {
                    console.log('errore chiamata email')
                }
            );
        };

    }]);