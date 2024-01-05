import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrderComponent} from "./order.component";
import {AuthGuard} from "../../core/auth/auth.guard";

const routes: Routes = [
  // { path: 'order', component: OrderComponent, canActivate: [AuthGuard] },
  { path: '', component: OrderComponent, canActivate: [AuthGuard] }, //здесь убрали order из path , т. к. order мы добавили в app.routing.ts в routes[0] = children[1]{path: 'order', ...}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
