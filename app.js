angular.module('myApp', [])
    .controller('myController', function(){
        var vm = this;
        vm.estado = {};
        vm.cidade = {};
    })
    .directive('selecionaEstado', function(){
        return {
            template: '<select ng-model="estado" ng-options="obj for obj in estados"></select>',
            scope: {
                estado: '='
            },
            controller: function($scope){
                $scope.estados = ['GO','DF']
            }
        }
    })
    .directive('selecionaCidade', function(){
        return {
            template: '<select ng-model="cidade" ng-options="obj for obj in cidades"></select>',
            scope: {
                estado: '=',
                cidade: '='
            },
            controller: function($scope){
                $scope.$watch('estado', function(){
                    if($scope.estado === 'DF'){
                        $scope.cidades = ['Brasília'];
                    } else {
                        $scope.cidades = ['Goiânia', 'Trindade'];
                    }
                });
            }
        }
    });