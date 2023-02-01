import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvengerCartComponent } from './components/avenger-cart/avenger-cart.component';
import { AvengerDetailComponent } from './components/avenger-detail/avenger-detail.component';
import { LayoutComponent } from './layout/layout/layout.component';

const routes: Routes = [{
    path:'',
    component: LayoutComponent,
    children:[
      {
        path:'',
        component: AvengerCartComponent
      },{
        path: 'character/:id',
        component: AvengerDetailComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
