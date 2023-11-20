import { Apartment } from './../core/models/Appartement';
import { Component } from '@angular/core';
import { Residence } from '../core/models/Residence';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css'],
})
export class ResidenceComponent {
  listResidences: Residence[] = [
    {
      id: 1,
      name: 'El fel',
      address: 'Borj Cedria',
      image: '../../assets/darHammamet.jpg',
    },
    {
      id: 2,
      name: 'El yasmine',
      address: 'Ezzahra',
      image: '../../assets/hotel12.jpg',
    },
    {
      id: 3,
      name: 'El Arij',
      address: 'Rades',
      image: '../../assets/hotel14.jpg',
    },
    {
      id: 4,
      name: 'El Anber',
      address: 'Manzah 5',
      image: '../../assets/villa1.jpg',
    },
  ];

  listApartments: Apartment[] = [
    {
      id: 1,
      appartNum: 1,
      floorNum: 0,
      surface: 100,
      terrace: 'oui',
      surfaceTerrace: 20,
      category: 'S+1',
      description: 'AppartementS+1',
      residence: this.listResidences[0],
    },
    {
      id: 2,
      appartNum: 2,
      floorNum: 0,
      surface: 130,
      terrace: 'non',
      surfaceTerrace: 0,
      category: 'S+2',
      description: 'AppartementS+2',
      residence: this.listResidences[0],
    },
    {
      id: 3,
      appartNum: 3,
      floorNum: 0,
      surface: 150,
      terrace: 'oui',
      surfaceTerrace: 30,
      category: 'S+3',
      description: 'AppartementS+3',
      residence: this.listResidences[1],
    },
  ];
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
    console.log("id exist",id,"  ",isIdAlreadyAdded);
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
