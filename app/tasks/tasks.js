'use strict';

angular.module('todoList.tasks', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/tasks', {
    templateUrl: 'tasks/tasks.html',
    controller: 'TasksCtrl'
  });
}])

.controller('TasksCtrl', [function() {

}]);