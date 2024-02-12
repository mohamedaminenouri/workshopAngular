import { Component } from '@angular/core';
import { Produit } from '../core/models/Produit';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css'],
})
export class PhoneComponent {
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
}
