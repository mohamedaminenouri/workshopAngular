import { Injectable } from '@angular/core';
import { Produit } from './core/models/Produit';
import { Apartment } from './core/models/Appartement';
import { Residence } from './core/models/Residence';
import { Product } from './model/product';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor() {}
  listProduit: Produit[] = [
    { id: 1, libelle: 'iphone x', marque: 'apple', prix: 1000, like: 3 },
    {
      id: 2,
      libelle: 'iphone 11 pro ',
      marque: 'apple',
      prix: 1200,
      like: 13,
    },
    {
      id: 3,
      libelle: 'iphone 12 pro max',
      marque: 'apple',
      prix: 2000,
      like: 8,
    },
    { id: 4, libelle: 'iphone 13 ', marque: 'apple', prix: 2800, like: 5 },
  ];

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

  addAppartement(appartment: Apartment) {
    this.listApartments.push(appartment);
  }
  products: Product[] = [
    { id: 1, libelle: 'samsung', price: 1200, qte: 14 },
    { id: 2, libelle: 'huawei', price: 1500, qte: 4 },
    { id: 3, libelle: 'xiami', price: 800, qte: 50 },
    { id: 4, libelle: 'oppo', price: 900, qte: 4 },
  ];

  addProduct(product: Product) {
    this.products.push(product);
}
}
