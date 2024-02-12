import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Produit } from '../core/models/Produit';

@Component({
  selector: 'app-show-one-produit',
  templateUrl: './show-one-produit.component.html',
  styleUrls: ['./show-one-produit.component.css'],
})
export class ShowOneProduitComponent {
  @Input() p!: Produit;
  @Output() notif = new EventEmitter();

  sendDataToParent(id_prod: number) {
    this.notif.emit(id_prod);
  }
  showMsgChild() {
    alert('hello from child');
  }



}
