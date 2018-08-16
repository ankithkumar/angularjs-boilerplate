export class tasksController {
    constructor(imageService) {
        'ngInject';
        this.imageService = imageService;
        this.imageList = this.imageService.getTheList();
        console.log('imageService contains ', this.imageService.getTheList().length);
    }
}