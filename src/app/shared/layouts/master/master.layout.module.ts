import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NavbarModule } from "../../components/navbar/navbar.module";
import { MasterLayout } from "./master.layout";



@NgModule({
    declarations: [MasterLayout],
    imports: [CommonModule,RouterModule,NavbarModule],
    exports: [MasterLayout],
    providers: [],
})

export class MasterLayoutModule { }