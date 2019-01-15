'use strict';

describe('todoList.tasks module', function() {

  beforeEach(module('todoList.tasks'));

  describe('tasks controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var tasksCtrl = $controller('TasksCtrl');
      expect(tasksCtrl).toBeDefined();
    }));

  });
});