import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import {AboutComponent} from "./about/about.component";
import {MainComponent} from "./main/main.component";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {NgbModalModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AboutComponent,
    MainComponent
  ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule,
        HomeRoutingModule,
        NgbModalModule,
        NgOptimizedImage,
        // надо его импортировать, чтобы использовать NgbModal в main.component.ts, т. е. подключать только то, что используем, чтобы не собирать всякий мусор в своём проекте
    ],
  exports: [
    HomeRoutingModule
  ]
})
export class HomeModule { }
