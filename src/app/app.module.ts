import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AvengerCartComponent } from './components/avenger-cart/avenger-cart.component';
import { AvengerNavComponent } from './components/avenger-nav/avenger-nav.component';
import { YouAvengersTeamComponent } from './components/you-avengers-team/you-avengers-team.component';
import { AvengerDetailComponent } from './components/avenger-detail/avenger-detail.component';
import { PaginationPipe } from './pipes/pagination.pipe';
import { AvengersListComponent } from './components/avengers-list/avengers-list.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    AppComponent,
    AvengerCartComponent,
    AvengerNavComponent,
    YouAvengersTeamComponent,
    AvengerDetailComponent,
    PaginationPipe,
    AvengersListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
