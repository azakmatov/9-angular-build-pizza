import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "./views/layout.component";
// import {ProductsComponent} from "./views/products/products/products.component";
// import {ProductComponent} from "./views/products/product/product.component";
// import {OrderComponent} from "./views/order/order.component";
// import {AuthGuard} from "./core/auth/auth.guard";
// import {MainComponent} from "./views/home/main/main.component";
// import {AboutComponent} from "./views/home/about/about.component";

const routes: Routes = [

  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: '', loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule)}, // здесь все строки конкатенуются, т. е. если в path будет home , то в about будет #/home/about
      {path: 'order', loadChildren: () => import('./views/order/order.module').then(m => m.OrderModule)},
      {path: 'products', loadChildren: () => import('./views/products/products.module').then(m => m.ProductsModule)},
    ] // все роуты с ленивой загрузкой
  },


  { path: 'pizzas', redirectTo: 'products' },
  { path: '**', redirectTo: '' }, // отправить на главную страницу, если ни один из роутов не сработал
  // { path: '**', component: AnyComponent }, // если ни один из роутов не сработал, отображать какой-либо компонент: 404, not found и т.д.
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled', useHash: true})], //включение или отключение скроллинга по якорю, по-умолчанию отключено, использование hash-стратегии URL (то есть использоваться # или что-то другое)
  exports: [RouterModule]
})
export class AppRoutingModule { }
