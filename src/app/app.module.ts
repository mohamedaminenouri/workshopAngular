import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FormsModule } from '@angular/forms';
import { ResidenceComponent } from './residence/residence.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppartementComponent } from './appartement/appartement.component';
import { AjouterAppartementComponent } from './ajouter-appartement/ajouter-appartement.component';
import { DetailsAppartementComponent } from './details-appartement/details-appartement.component';
// pour chaque biblio je doit le declarer dans imports
// chaque component je doit le decarer dans le declarations
@NgModule({
  declarations: [AppComponent, TestComponent, ResidenceComponent, NavbarComponent, NotFoundComponent, AppartementComponent, AjouterAppartementComponent, DetailsAppartementComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
