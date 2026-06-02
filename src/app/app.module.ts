import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HeroComponent } from './components/hero/hero.component';
import { ModelViewerComponent } from './components/model-viewer/model-viewer.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { MenuShowcaseComponent } from './components/menu-showcase/menu-showcase.component';
import { AllergensComponent } from './components/allergens/allergens.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { OpeningHoursComponent } from './components/opening-hours/opening-hours.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeroComponent,
    ModelViewerComponent,
    VideoPlayerComponent,
    MenuShowcaseComponent,
    AllergensComponent,
    TestimonialsComponent,
    OpeningHoursComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
