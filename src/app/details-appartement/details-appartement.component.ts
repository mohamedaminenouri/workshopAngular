import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apartment } from '../core/models/Appartement';
import { Residence } from '../core/models/Residence';

@Component({
  selector: 'app-details-appartement',
  templateUrl: './details-appartement.component.html',
  styleUrls: ['./details-appartement.component.css'],
})
export class DetailsAppartementComponent implements OnInit {
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
  constructor(private route: ActivatedRoute) {}
  apartment?: Apartment;
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.apartment = this.listApartments.find((apprt) => apprt.appartNum == id);

  }
}
