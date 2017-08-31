import * as angular from 'angular';

var app = angular.module('app', []);

function RootController() {
    var vm = this;
    vm.title = 'Now there is something';
}
app.controller("RootController", RootController); 