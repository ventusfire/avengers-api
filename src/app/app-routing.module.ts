import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvengerCartComponent } from './components/avenger-cart/avenger-cart.component';
import { AvengerDetailComponent } from './components/avenger-detail/avenger-detail.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { TeamManagementComponent } from './components/team-management/team-management.component';
import { AvengersListComponent } from './components/avengers-list/avengers-list.component';

const routes: Routes = [{
    path:'',
    component: LayoutComponent,
    children:[
      {
        path:'',
        component: AvengersListComponent
      },{
        path: 'character/:id',
        component: AvengerDetailComponent
      },{
        path: 'management',
        component: TeamManagementComponent
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
