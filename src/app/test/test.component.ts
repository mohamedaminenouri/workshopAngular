import { Component } from '@angular/core';
import { Produit } from '../model/produit';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent {
name ="nouri";
  listproduct:Produit [] = [
    { id: 1, libelle: 'banana', price: 15, qte: 500 },
    { id: 2, libelle: 'fraise', price: 150, qte: 8 },
    { id: 1, libelle: 'cioui', price: 105, qte: 870 },
  ];

  ajoutLike(i: number) {
    this.listproduct[i].qte++;
  }
  dislake(i: number) {
    this.listproduct[i].qte--;
  }

  prix=0;

}
