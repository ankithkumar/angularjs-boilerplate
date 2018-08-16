export class imageService {
    constructor(localStorageService) {
        'ngInject';
        this.localStorage = localStorageService;
        if (!this.localStorage) {
            console.error('localStorage is not supported!');
        }
        this.images = 'images';
        console.log('here in image service!');
        this.initialize();
    };

    initialize() {
        this.imageList = [];
        if (!this.localStorage.get(this.images)) {
            this.localStorage.set(this.images, []);
        }
        console.log('ls is set', this.localStorage.get(this.images));
        this.imageList = this.localStorage.get(this.images);
    }

    addImageToList (imgUrl) {
        let arr = this.localStorage.get(this.images);
        arr.push(imgUrl);
        this.localStorage.set(this.images, arr);
        console.log('updated list contains ', this.localStorage.get(this.images));
        this.imageList.push(imgUrl);
    };

    getTheList() {
        return this.imageList;
    };
}