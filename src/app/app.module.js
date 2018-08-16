import angular from 'angular';
import uiRouter from "@uirouter/angularjs";
import uiBootstrap from 'angular-ui-bootstrap';
import {componentModule} from './component/component.module';
import {serviceModule} from './service/service.module';
import angularLocalStorage from 'angular-local-storage';

export const AppModule = angular
    .module('AppModule', [
        uiRouter,
        serviceModule,
        componentModule,
        uiBootstrap,
        angularLocalStorage
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