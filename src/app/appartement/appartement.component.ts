import { Apartment } from './../core/models/Appartement';
import { Component, OnInit } from '@angular/core';
import { Residence } from '../core/models/Residence';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';
import { CalculService } from '../calcul.service';

@Component({
  selector: 'app-appartement',
  templateUrl: './appartement.component.html',
  styleUrls: ['./appartement.component.css'],
})
export class AppartementComponent implements OnInit {

  constructor(private route: ActivatedRoute,private serviceAp:ServiceService,private serviceCalcul:CalculService) {}

  list: Apartment[] = [];
listApartments:Apartment[]=[];


  ngOnInit(): void {
   const id = Number(this.route.snapshot.paramMap.get('id'));
   this.listApartments=this.serviceAp.listApartments;
   let x:any;
   this.serviceCalcul.calcul(this.serviceAp.listApartments, 'surface', x );

    this.list = this.listApartments.filter((apprt) => apprt.residence.id == id);
  }
}
