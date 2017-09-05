import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components//home/home.component';
import { QSomosComponent } from './components//q-somos/q-somos.component';
import { QHacemosComponent } from './components//q-hacemos/q-hacemos.component';
import { QMotivaComponent } from './components//q-motiva/q-motiva.component';
import { HClubComponent } from './components//h-club/h-club.component';
import { MStoreComponent } from './components//m-store/m-store.component';
import { ContactComponent } from './components//contact/contact.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { MenuBoxComponent } from './components/menu-box/menu-box.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QSomosComponent,
    QHacemosComponent,
    QMotivaComponent,
    HClubComponent,
    MStoreComponent,
    ContactComponent,
    MainNavComponent,
    MenuBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
