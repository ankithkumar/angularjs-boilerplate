import {tasksController} from './tasks.controller';
import './tasks.scss';

export const tasksComponent = {    
        template: require('./tasks.html'),
        controller: tasksController
    };