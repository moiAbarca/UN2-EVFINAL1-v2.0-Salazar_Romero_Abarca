/**
 * Created by mOi on 01-06-16.
 */
angular.module('myApp', [])
    .controller('ctrlTarea', function($scope){
        $scope.tarea = {}
        $scope.tareas = [];

        $scope.agregar = function(){
            $scope.tareas.push({
                nombre: $scope.tarea.nombre
            })

            $scope.tarea.nombre = '';

        }
    })