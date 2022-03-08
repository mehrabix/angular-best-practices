import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
})
export class GalleryComponent implements OnInit {

    @Input() _galleryList:Array<any> = []
    constructor() { }

    ngOnInit(): void { }
}
