'use strict';

angular.module('App', [])

.controller('WatchCtrl', function ($scope, $http, $timeout) {

    $timeout(function () {
        get('argentina');
    }, 1000);

    $timeout(function () {
        get('ecuador');
    }, 3000);

    $timeout(function () {
        get('france');
    }, 6000);

    $scope.$watch('::weather', function (nv) {
        console.log(nv);
    });

    function get(location) {
        $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + location).then(function (res) {
            $scope.weather = res.data;
        });
    }

})

.controller('WatchObjCtrl', function ($scope) {

    $scope.$watch('::{key1: watchedValue1, key2: watchedValue2}', function (nv) {
        console.log(nv);
    }, true);

    $scope.setValue = function (n) {
        var current = $scope['watchedValue' + n] || 0;
        $scope['watchedValue' + n] = current += 1;
    }

});