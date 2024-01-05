import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductCardComponent} from "./components/product-card/product-card.component";
import {TitleComponent} from "./components/title/title.component";
import {CoolInputDirective} from "./directives/cool-input.directive";
import {IsChickenDirective} from "./directives/is-chicken.directive";
import {ChickenDescriptionPipe} from "./pipes/chicken-description.pipe";
import {ChickenProductsPipe} from "./pipes/chicken-products.pipe";
import {WordUpperPipe} from "./pipes/word-upper.pipe";
import {RouterModule} from "@angular/router";
import { PopComponent } from './components/pop/pop.component';
// import {MatMenuModule} from "@angular/material/menu";
// import {MatIconModule} from "@angular/material/icon";
// import {MatButtonModule} from "@angular/material/button";
// import { PopupComponent } from './components/popup/popup.component'; // и без импорта работает, т. к. это не полноценный компонент и работает по имени класса и дальше уже сама библиотека Bootstrap уже с ним работает и преобразовывает нужные данные, т. е. такие правила диктует эта библиотека и поэтому мы так сделали

@NgModule({
  declarations: [
    ProductCardComponent,
    TitleComponent,
    CoolInputDirective,
    IsChickenDirective,
    ChickenDescriptionPipe,
    ChickenProductsPipe,
    WordUpperPipe,
    PopComponent,
    // PopupComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    // MatMenuModule,
    // MatIconModule,
    // MatButtonModule
  ],
  exports: [
    ProductCardComponent,
    TitleComponent,
    CoolInputDirective,
    IsChickenDirective,
    ChickenDescriptionPipe,
    ChickenProductsPipe,
    WordUpperPipe,
    PopComponent,
  ]
})
export class SharedModule { }
