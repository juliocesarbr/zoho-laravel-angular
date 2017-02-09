/*Definición de App y de Rutas con Angular Route*/
var zohoApp = angular.module('zohoApp', [
  'ngRoute',
  'zohoAppControllers'
]);


zohoApp.config(['$routeProvider', function($routeProvider) {
    
    $routeProvider.
    /*Ruta de Pantalla Principal*/
    when('/', {
        templateUrl: 'vistas/index.html',
        controller: 'MainController'
    }).
    otherwise({
        redirectTo: '/'
    });

}]);
var zohoAppControllers = angular.module('zohoAppControllers', []);


zohoAppControllers.controller('MainController', ['$scope', '$http', function ($scope, $http) {

	//Consulta la API para traer los contactos
    $scope.consultaInvoices = function () {
	    $http.get('/service/getZohoData')
		    .then(function(response, status, headers, config) {
			    $scope.invoices = response.data.invoices;
			    console.log($scope.invoices);
		    });
    }
    $scope.mayorA = function(){
    	console.log('Actua');
    };

	$scope.consultaInvoices();

}]);

/*Defino los servicios de la Aplicación Zoho*/
var zohoAppServices = angular.module('zohoAppServices', [
    'LocalStorageModule'
]);

zohoAppServices.factory('userService', ['$http', 'localStorageService', function($http, localStorageService) {

    /*Funcion que Busca los Datos*/
    function getDatos(){
        console.log('Hola Julio');

        $http.post('/api/auth/login', 
        {
            email: email,
            password: password
        }).
        then(function(response) {

            localStorageService.set('token', response.data.token);
            onSuccess(response);

        }, function(response) {
            onError(response);
        });
    }

}]);
//# sourceMappingURL=app.js.map
