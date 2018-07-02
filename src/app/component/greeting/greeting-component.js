import {greetingController} from './greeting-controller';

export const greetingComponent = {    
        template: require('./greeting.html'),
        controller: greetingController,
        controllerAs: "$ctrl"
    };