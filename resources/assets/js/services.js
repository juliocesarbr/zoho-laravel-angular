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