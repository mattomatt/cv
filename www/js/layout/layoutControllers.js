/**
 * Created by mattomatt on 17/12/14.
 */

angular.module('layout')

    .controller('AppCtrl', ['$scope', function ($scope) {
        console.log('AppCtrl');
        $scope.downloadPdf=function(){

            window.plugins.webintent.startActivity({
                    action: window.plugins.webintent.ACTION_VIEW,
                    type:'application/pdf',
                    url: 'file:///assets/www/res/curriculum.pdf'
                },
                function(){
                    console.log('chiamata ok')
                },
                function(e){
                    console.log('errore chiamata')
                }
            );
        };
    }]);