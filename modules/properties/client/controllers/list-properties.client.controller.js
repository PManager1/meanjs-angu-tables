(function () {
  'use strict';

  angular
    .module('properties')
    .controller('PropertiesListController', PropertiesListController);

  PropertiesListController.$inject = ['$scope','PropertiesService'];

  function PropertiesListController($scope, PropertiesService) {
    var vm = this;

    $scope.selected = [];

  $scope.query = {
    order: 'name',
    limit: 5,
    page: 1
  };



    vm.properties = PropertiesService.query();
  }
}());
