import {greetingComponent} from './greeting/greeting-component';
import {userInputComponent} from './user-input/user-input.component';
import {tasksComponent} from './tasks/tasks.component';

export const componentModule = angular
                                .module('componentModule', [])
                                .component('greet', greetingComponent)
                                .component('userinput', userInputComponent)
                                .component('tasks', tasksComponent)
                                .name;
