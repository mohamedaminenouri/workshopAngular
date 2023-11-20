import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { ResidenceComponent } from './residence/residence.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppartementComponent } from './appartement/appartement.component';
import { AjouterAppartementComponent } from './ajouter-appartement/ajouter-appartement.component';
import { DetailsAppartementComponent } from './details-appartement/details-appartement.component';
// c concernant nos routes
const routes: Routes = [
  { path: 'product', component: TestComponent },
  { path: 'residence', component: ResidenceComponent },
  { path: 'appartement/:id', component: AppartementComponent },
  { path: 'ajouterDeprt', component: AjouterAppartementComponent },
  { path: 'detailsAprt/:id', component: DetailsAppartementComponent },
  { path: '', redirectTo: '/product', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
