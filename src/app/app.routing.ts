import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryItem } from './myblog/pages/gallery-item/gallery-item.page';
import { HomePage } from './myblog/pages/home.page';
import { BlankLayout } from './shared/layouts/blank/blank.layout';
import { MasterLayout } from './shared/layouts/master/master.layout';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
    },
    {
        path: 'home',
        component: MasterLayout,
        children: [
            {
                path: '',
                component: HomePage,
            },
        ],
    },
    {
        path: 'gallery',
        component: BlankLayout,
        children:[
            {
                path: '',
                component:GalleryItem,
                
                
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
