import { Component, OnInit } from '@angular/core';
import { PersistService } from '../../services/persist.service';


@Component({
    selector: 'app-gallery-item',
    templateUrl: './gallery-item.page.html',
})
export class GalleryItem implements OnInit {


    constructor(private persist:PersistService) { }



    ngOnInit(): void {
        this.persistSomething()
        setTimeout(() => {
            this.getSomething()
        }, 2000);
     }

     persistSomething(){
         this.persist.set("username","ahmad")
     }
     getSomething(){
         console.log(this.persist.get('username'))
     }
}
