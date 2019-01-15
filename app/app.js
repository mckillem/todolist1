'use strict';

// Declare app level module which depends on views, and core components
angular.module('todoList', [
  'ngRoute',
  'todoList.projects',
  'todoList.tasks',
  "todoList.dashboard",
  "todoList.logIn",
  "todoList.users",

  'todoList.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/logIn'});
}]);
