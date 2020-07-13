import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Exercice2Component } from './components/exercice2/exercice2.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BoxOfficeComponent } from './components/box-office/box-office.component';
import { MovieComponent } from './components/movie/movie.component';
import { Exercice1Component } from './components/exercice1/exercice1.component';
import { HorlogeComponent } from './components/horloge/horloge.component';
@NgModule({
  declarations: [
    AppComponent,
    Exercice2Component,
    BoxOfficeComponent,
    MovieComponent,
    Exercice1Component,
    HorlogeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
