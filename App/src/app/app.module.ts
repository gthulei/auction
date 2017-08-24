import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProduceComponent } from './produce/produce.component';
import { StarsComponent } from './stars/stars.component';
import { BannerComponent } from './banner/banner.component';
import { SearchComponent } from './search/search.component';
import { ProduceDetailComponent } from './produce-detail/produce-detail.component';
import {RouterModule, Routes} from "@angular/router";
import { Error404Component } from './error404/error404.component';
import {ApiService} from "./service/api.service";
import { SearchFilterPipe } from './pipe/search-filter.pipe';
import {HttpModule} from "@angular/http";

// 路由配置
const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'produceDetail/:id', component: ProduceDetailComponent },
  { path: '**', component: Error404Component },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ProduceComponent,
    StarsComponent,
    BannerComponent,
    SearchComponent,
    ProduceDetailComponent,
    Error404Component,
    SearchFilterPipe,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
