/**
 * Created by mOi on 01-06-16.
 */
angular.module('myApp', [])

    /*.factory('comun', function(){
        var comun = {}

        comun.tareas = [{}]

        comun.tarea = {};

        comun.eliminar = function(tarea){
            var indice = comun.tareas.indexOf(tarea);
            comun.tareas.splice(indice, 1);
        }

        return comun;
    })*/

    .controller('ctrlTarea', function($scope){
        $scope.tarea = {}
        $scope.tareas = [];

        //$scope.tareas = comun.tareas;

        $scope.agregar = function(){
            $scope.tareas.push({
                nombre: $scope.tarea.nombre
            })

            $scope.tarea.nombre = '';

        }


        $scope.eliminar = function(tarea){
            var indice = $scope.tareas.indexOf(tarea);
            $scope.tareas.splice(indice, 1);
        }

        /*$scope.eliminar = function(tarea){
            comun.eliminar(tarea)
        }*/

        $scope.editaObjeto = function(tarea){
            $scope.tarea = tarea;
            var indice2 = $scope.tareas.indexOf(tarea);
            $scope.tareas[indice2] = $scope.tarea;
            
            //$scope.tareas.splice(indice2, 1, $scope.tarea.nombre);
            //$scope.tareas.update(indice2, $scope.tarea.nombre);
            //$scope.tareas[indice2].push($scope.tarea.nombre);
            //$scope.tarea = $scope.tareas[indice2];
            
        }


    })