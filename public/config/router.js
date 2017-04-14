'use strict';
angular.module('picoDiarioApp')
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/', {
        controller: 'NoticiaController',
        controllerAs: 'vm',
        templateUrl: 'views/noticia/noticias.html'
    })
}]);