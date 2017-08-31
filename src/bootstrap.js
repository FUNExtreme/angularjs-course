import * as angular from 'angular';
import { RootController } from './app/root.controller';

var app = angular.module('app', []);

app.controller(RootController.iid, RootController); 