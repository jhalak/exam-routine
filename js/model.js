var model = angular.module('routinModel', ['ngResource']);

model.factory('Routine', function($resource) {
      var Routine = $resource('index.php');

      Routine.prototype.update = function(cb) {
        return Routine.update({id: this._id.$oid},
            angular.extend({}, this, {_id:undefined}), cb);
      };

      Routine.prototype.destroy = function(cb) {
        return Routine.remove({id: this._id.$oid}, cb);
      };

      return Routine;
    });
