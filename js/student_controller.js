myAppmodule.controller('studentsController', ['$scope', function ($scope) {
    $scope.students = [
        {
            name: 'User',
            surname: 'One',
            imgUrl: 'http://lorempixel.com/400/200/cats/',
            telNumber: '937-99-92',
            id: 0
        }, {
            name: 'User',
            surname: 'Two',
            imgUrl: 'http://lorempixel.com/400/200/cats/',
            telNumber: '937-99-92',
            id: 1
        }, {
            name: 'User',
            surname: 'Three',
            imgUrl: 'http://lorempixel.com/400/200/cats/',
            telNumber: '937-99-92',
            id: 2
        }
    ]
}]);