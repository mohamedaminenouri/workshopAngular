import { Residence } from './../core/models/Residence';
import { Apartment } from './../core/models/Appartement';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-appartement',
  templateUrl: './ajouter-appartement.component.html',
  styleUrls: ['./ajouter-appartement.component.css'],
})
export class AjouterAppartementComponent {
  constructor(
    private service: ServiceService,
    private fb: FormBuilder,
    private rout: Router
  ) {}
  listApparts: Apartment[] = [];
  appartementForm! :FormGroup;
  ngOnInit() {
    this.listApparts = this.service.listApartments;
    this.appartementForm = new FormGroup({
      apart_id: new FormControl(''),
      num_apt: new FormControl('', Validators.required),
      floorNum: new FormControl('', Validators.minLength(3)),
      surface: new FormControl(''),
      terrace: new FormControl(''),
      surfaceTerrace: new FormControl(''),
      categorie: new FormControl(''),
      description: new FormControl(''),
      residence_id: new FormControl(''),
    });
  }



  ajouterAppartement() {
    //apartement Apartment;
//apartement =new Apartment();

  this.service.addAppartement(this.appartementForm.value);
  let getbyid = this.appartementForm.get('residence_id')?.value;

 let re=  this.service.listResidences.filter((residence) => (residence.id === getbyid));
 console.log(re);

  console.log("residence id"+getbyid);
  console.log("list appartements "+this.service.listApartments);
  }



  reset() {
    this.appartementForm.reset();
  }
  isFormInvalid() {
    return this.appartementForm.invalid && this.appartementForm.dirty;
  }
}
