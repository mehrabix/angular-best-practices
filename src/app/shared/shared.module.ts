import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { RouterModule } from "@angular/router"
import { BlankLayoutModule } from "./layouts/blank/blank.layout.module"
import { MasterLayoutModule } from "./layouts/master/master.layout.module"



const MODULES: Array<any> = []
const COMPONENTS: Array<any> = []
const LAYOUTS:Array<Object> = [MasterLayoutModule,BlankLayoutModule]



@NgModule({
    declarations: [...COMPONENTS],
    imports: [CommonModule,RouterModule,...MODULES, ...LAYOUTS],
    exports: [...COMPONENTS],
    providers: [],

})
export class SharedModule { }