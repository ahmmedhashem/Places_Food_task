import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { NavbarComponent } from './Landing/navbar/navbar.component';
import { SliderComponent } from './Landing/slider/slider.component';
import { AboutPlacesComponent } from './Landing/about-places/about-places.component';
import { PlacesSampleComponent } from './Landing/places-sample/places-sample.component';
import { FooterComponent } from './Landing/footer/footer.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    AboutPlacesComponent,
    PlacesSampleComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
