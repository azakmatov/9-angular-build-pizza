import { TuiRootModule } from "@taiga-ui/core";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import {//HTTP_INTERCEPTORS,
  HttpClientModule} from "@angular/common/http";
import {CoreModule} from "./core/core.module";
import {SharedModule} from "./shared/shared.module";
import {HeaderComponent} from "./shared/layout/header/header.component";
import {FooterComponent} from "./shared/layout/footer/footer.component";
import { LayoutComponent } from './views/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import {ProductsModule} from "./views/products/products.module";
// import {HomeModule} from "./views/home/home.module";
// import {OrderModule} from "./views/order/order.module";
// import { HeaderComponent } from './components/common/header/header.component';
// import { FooterComponent } from './components/common/footer/footer.component';
// import { CoolInputDirective } from './shared/directives/cool-input.directive';
// import { IsChickenDirective } from './shared/directives/is-chicken.directive';
// import { ChickenDescriptionPipe } from './shared/pipes/chicken-description.pipe';
// import { ChickenProductsPipe } from './shared/pipes/chicken-products.pipe';
// import { ProductService } from "./shared/services/product.service";
// import { OrderComponent } from './views/order/order.component';
// import { MainComponent } from './views/home/main/main.component';
// import { AboutComponent } from './views/home/about/about.component';
// import {AuthInterceptor} from "./core/auth/auth.interceptor";
// import { WordUpperPipe } from './pipes/word-upper.pipe';
// import { ProductCardComponent } from './components/common/product-card/product-card.component';
// import { TitleComponent } from './components/common/title/title.component';
// import { ProductsComponent } from './components/pages/products/products.component';
// import { ProductComponent } from './components/pages/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    // CoolInputDirective,
    // IsChickenDirective,
    // ChickenDescriptionPipe,
    // ChickenProductsPipe,
    // OrderComponent,
    // MainComponent,
    // AboutComponent,
    // WordUpperPipe,
    // ProductCardComponent,
    // TitleComponent,
    // ProductsComponent,
    // ProductComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        CoreModule,
        SharedModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        TuiRootModule
    ],
  providers: [
    // ProductService,
    // {
    //   provide: HTTP_INTERCEPTORS, // добавление по этому ключу injection-токен новый auth.interceptor
    //   useClass: AuthInterceptor,
    //   multi: true
    // }
  ], //сервис на уровне модуля
  bootstrap: [AppComponent] //отсюда мы убрали HeaderComponent и FooterComponent, так как они теперь через AppComponent
})
export class AppModule {}
