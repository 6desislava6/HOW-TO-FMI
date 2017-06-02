angular.module('htfmi')
    .service('resources', ['$resource', function ($resource) {
        var SERVICE_URI = '';
        
        var DesignDistancesRecipeTest = $resource(SERVICE_URI + '/api/recipetest/students/:studentId/design_distances', { studentId: '@id' });
    
        return {
            designDistancesRecipeTest: DesignDistancesRecipeTest
        };
    }]
);