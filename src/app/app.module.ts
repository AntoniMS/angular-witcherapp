import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { MainComponent } from './features/home/components/main/main.component';
import { HeroComponent } from './features/home/components/hero/hero.component';
import { GalleryComponent } from './features/home/components/gallery/gallery.component';
import { HeaderComponent } from './features/home/components/header/header.component';
import { ImageComponent } from './shared/components/image/image.component';
import { ItemComponent } from './features/home/components/main/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    HeroComponent,
    GalleryComponent,
    HeaderComponent,
    ImageComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
