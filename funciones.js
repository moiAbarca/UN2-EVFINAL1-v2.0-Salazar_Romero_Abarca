/**
 * Created by mOi on 01-06-16.
 */
angular.module('myApp', [])

    .factory('comun', function(){
        var comun = {}

        comun.eliminar = function(tarea){
            var indice = comun.tareas.indexOf(tarea);
            comun.tareas.splice(indice, 1);
        }

        return comun;
    })

    .controller('ctrlTarea', function($scope, comun){
        $scope.tarea = {}
        //$scope.tareas = [];

        $scope.tareas = comun.tareas;

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
    })