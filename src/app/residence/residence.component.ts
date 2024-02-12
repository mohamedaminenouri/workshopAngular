import { Apartment } from './../core/models/Appartement';
import { Component } from '@angular/core';
import { Residence } from '../core/models/Residence';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css'],
})
export class ResidenceComponent {
  constructor(private serviceDepRes: ServiceService) {}
  listApartments!: Apartment[];
  listResidences!: Residence[];
  ngOnInit() {
    this.listApartments = this.serviceDepRes.listApartments;
    this.listResidences= this.serviceDepRes.listResidences;
  }

  // je test si le disolayedApartments n'etait pas vide alors on affiche
  displayedApartments: any[] = [];
  affiche(rs: number) {
    this.displayedApartments = this.listApartments.filter(
      (element) => element.residence.id === rs
    );
  }
  displayedFavorisApartments: Apartment[] = [];
  favorisList(id: any) {
    const isIdAlreadyAdded = this.displayedFavorisApartments.some(
      (apartment) => apartment.appartNum === id
    );
    console.log('id exist', id, '  ', isIdAlreadyAdded);
    // Filtrer les appartements pour ceux avec l'ID spécifié
    if (!isIdAlreadyAdded) {
      const filteredApartments = this.listApartments.filter(
        (element) => element.appartNum === id
      );

      // Concaténer les résultats filtrés avec les résultats existants
      this.displayedFavorisApartments =
        this.displayedFavorisApartments.concat(filteredApartments);
    }
  }
  surface = 0;
}
