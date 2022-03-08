import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [GalleryComponent],
    imports: [ CommonModule,RouterModule ],
    exports: [GalleryComponent],
    providers: [],
})
export class GalleryModule {}