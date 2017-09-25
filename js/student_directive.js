myAppmodule.directive('studentDirective', function () {
  var directiveDefinitionObject = {
    priority: 0,
    template: `<section>
                  <img src="{{ photo }}" alt="student img" ui-sref="profile({ id: {{ id }} })">
                  <div>
                    <input ng-show="isEdit" ng-model="name"> <br ng-show="isEdit">
                    <input ng-show="isEdit" ng-model="surname">
                  </div>
                <label ng-show="!isEdit">{{ name }} {{ surname }}</label>
                <button ng-show="!isEdit" ng-click="isEdit=true">Edit</button>
                <button ng-show="isEdit" ng-click="isEdit=false">Save</button>
               </section>`,
    transclude: false,
    restrict: 'E',
    scope: {
      name: '=',
      surname: '=',
      photo: '=',
      id: '='
    }
  };
  return directiveDefinitionObject;
});
