myAppmodule.config(function ($stateProvider) {
    var profile = {
        name: 'profile',
        url: '/student/:id',
        template: function ($stateParams) {
            return `<div class="students">
                        <section>
                            <img src="{{students[${$stateParams.id}].imgUrl}}"><br>
                            <label>
                                Name: {{students[${$stateParams.id}].name}}
                                {{students[${$stateParams.id}].surname}}
                            </label><br>
                            <label>Tel: {{students[${$stateParams.id}].telNumber}}</>
                        </section>
                    </div>`
        },
        controller: 'studentsController',
    }

    var index = {
        name: 'index',
        url: '',
        template: `<div class="students-list">
                    <student-directive  
                        ng-repeat="student in students"
                            name="student.name"
                            surname="student.surname"
                            photo="student.imgUrl"
                            id="student.id">
                        </student-directive>
                    </div>`,
        controller: 'studentsController',
    }

    $stateProvider.state(index);
    $stateProvider.state(profile);
});