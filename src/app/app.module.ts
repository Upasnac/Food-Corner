import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { HeaderComponent } from './components/specials/header/header.component';
import { NotFoundComponent } from './components/specials/not-found/not-found.component';
import { SearchComponent } from './components/specials/search/search.component';
import { TagsComponent } from './components/specials/tags/tags.component';
import { TitleComponent } from './components/specials/title/title.component';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'ng-starrating';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FoodPageComponent,
    CartPageComponent,
    HeaderComponent,
    NotFoundComponent,
    SearchComponent,
    TagsComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
