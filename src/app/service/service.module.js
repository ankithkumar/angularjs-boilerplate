import {imageService} from './image.service';

export const serviceModule = angular
                                .module('serviceModule', [])
                                .service('imageService', imageService)
                                .name;
