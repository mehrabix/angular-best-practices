import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NavbarModule } from "../../components/navbar/navbar.module";
import { BlankLayout } from "./blank.layout";



@NgModule({
    declarations: [BlankLayout],
    imports: [CommonModule,RouterModule,NavbarModule],
    exports: [BlankLayout],
    providers: [],
})
export class BlankLayoutModule { }