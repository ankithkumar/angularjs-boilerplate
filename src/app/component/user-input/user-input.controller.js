export class userInputController {
    constructor(imageService) {
        'ngInject';
        this.imageService = imageService;
        console.log('in user input controller!');
        this.imageUrl = '';
    }

    addImageToList() {
        console.log('imageUrl contains',this.imageUrl);
        if (this.imageUrl) {
            this.imageService.addImageToList(this.imageUrl);
            this.imgageUrl = null;
            console.log('image Added to The List!');
            return;
        }
        console.error('specify the imageUrl!');
    }
}