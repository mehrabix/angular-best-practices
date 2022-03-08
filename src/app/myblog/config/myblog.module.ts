import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { GalleryModule } from "src/app/shared/components/gallery/gallery.module"
import { NavbarModule } from "src/app/shared/components/navbar/navbar.module"
import { HomePage } from "../pages/home.page"



const MODULES:Array<any> = [NavbarModule,GalleryModule]

const PAGES:Array<any> = [HomePage]

const Popups:Array<any> = []


@NgModule({
    declarations: [...PAGES, ...Popups],
    imports: [CommonModule,...MODULES],
    exports: [...PAGES,...Popups],
    providers: [],
})
export class MyBlogModule { }