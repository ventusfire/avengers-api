import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvengerCartComponent } from './components/avenger-cart/avenger-cart.component';
import { AvengerDetailComponent } from './components/avenger-detail/avenger-detail.component';

const routes: Routes = [
  {
    path:'avengers',
    component: AvengerCartComponent
  },{
    path: 'character/:id',
    component: AvengerDetailComponent
  },{
    path:'',
    redirectTo: 'avengers',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'avengers',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
