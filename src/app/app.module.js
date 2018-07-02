import angular from 'angular';
import uiRouter from "@uirouter/angularjs";
import uiBootstrap from 'angular-ui-bootstrap';
import {componentModule} from './component/component.module';

export const AppModule = angular
    .module('AppModule', [
        uiRouter,
        componentModule,
        uiBootstrap
    ])
    .config(function ($stateProvider) {
        $stateProvider
            .state({
                name: 'root',
                url: '',
                template: `<userinput></userinput>`
            })
            .state({
                name: 'task',
                url: '/task',
                template: `<tasks></tasks>`
            })
    })
    .name;