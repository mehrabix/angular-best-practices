import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { MyBlogModule } from './myblog/config/myblog.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const UsedModule:Array<any> = [MyBlogModule,SharedModule];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ...UsedModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
