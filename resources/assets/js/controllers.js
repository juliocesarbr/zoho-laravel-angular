var zohoAppControllers = angular.module('zohoAppControllers', []);


zohoAppControllers.controller('MainController', ['$scope', '$http', function ($scope, $http) {

	//Consulta la API para traer los contactos
    $http.get('api.php')
    .then(function(response, status, headers, config) {
        $scope.invoices = response.data.invoices;
        console.log($scope.invoices);
    });

    $scope.mayorA = function(){
    	console.log('Actua');
    };

}]);