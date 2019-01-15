'use strict';

angular.module('todoList.users', ['ngRoute'])
    .controller('UsersCtrl', ['$scope', '$http', function($scope, $http) {
        $http.get('users.php').then(function (response) {
            $scope.users = response.data;
        });
 }]);