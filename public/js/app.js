/*Definición de App y de Rutas con Angular Route*/
var zohoApp = angular.module('zohoApp', [
  'ngRoute',
  'zohoAppControllers'
]);

zohoApp.config(['$routeProvider', function($routeProvider) {
    
    $routeProvider.
    /*Ruta de Acceso*/
    when('/', {
        templateUrl: 'vistas/login.html',
        controller: 'LoginController'
    }).
    /*Ruta de Salida*/
    when('/logout', {
        templateUrl: 'vistas/logout.html',
        controller: 'LogoutController'
    }).
    /*Ruta de Pantalla Principal*/
    when('/dashboard', {
        templateUrl: 'vistas/index.html',
        controller: 'MainController'
    }).
    otherwise({
        redirectTo: '/'
    });

}]);
var zohoAppControllers = angular.module('zohoAppControllers', []);

zohoAppControllers.controller('LoginController', ['$scope', '$http', function ($scope, $http) {

}]);

zohoAppControllers.controller('LogoutController', ['$scope', '$http', function ($scope, $http) {

}]);

zohoAppControllers.controller('MainController', ['$scope', '$http', function ($scope, $http) {
    
}]);
//# sourceMappingURL=app.js.map
