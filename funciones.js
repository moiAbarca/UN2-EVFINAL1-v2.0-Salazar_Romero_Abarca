/**
 * Created by mOi on 01-06-16.
 */
angular.module('myApp', [])

    /*.factory('comun', function($http){
        var comun = {};

        comun.tareas = [];

        comun.tarea = {};

        comun.eliminar = function(tarea){
            var indice = comun.tareas.indexOf(tarea);
            comun.tareas.splice(indice, 1);
        }

        return comun;
    })*/

    .controller('ctrlTarea', function($scope, $http){

        //métodos remotos
        $scope.getAll = function () {
            return $http.get('/tareas')
                .succes(function (data) {
                    angular.copy(data, $scope.tareas)
                    return $scope.tareas
                })
        }

        $scope.add = function (tarea) {
            return $http.post('/tarea', tarea)
                .succes(function (tarea) {
                    $scope.tareas.push(tarea);
                })
        }

        $scope.update = function (tarea) {
            return $http.put('/tarea/' + tarea._id, tarea )
                .succes(function (data) {
                    var indice = $scope.tareas.indexOf(tarea);
                    $scope.tareas[indice] = data;
                })
        }

        $scope.delete = function (tarea) {
            return $http.delete('/tarea/'+ tarea._id)
                .succes(function () {
                    var indice = $scope.tareas.indexOf(tarea);
                    $scope.tareas.splice(indice, 1);
                })
        }

        //métodos locales

        $scope.tarea = {}
        $scope.tareas = [];

        //$scope.tareas = comun.tareas;

        $scope.agregar = function(){
            $scope.add({
                nombre: $scope.tarea.nombre
            })

            $scope.tarea.nombre = '';

        }


        $scope.eliminar = function(tarea){
            $scope.delete(tarea);
        }

        /*$scope.eliminar = function(tarea){
            comun.eliminar(tarea)
        }*/

        $scope.editaObjeto = function(){
             $scope.update($scope.tarea);
            
            //$scope.tareas.splice(indice2, 1, $scope.tarea.nombre);
            //$scope.tareas.update(indice2, $scope.tarea.nombre);
            //$scope.tareas[indice2].push($scope.tarea.nombre);
            //$scope.tarea = $scope.tareas[indice2];
            
        }




    })