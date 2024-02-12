import { Product } from './../model/product';
import { ConsumerProductService } from './../consumer-product.service';
import { ServiceService } from './../service.service';
import { ShowOneProduitComponent } from './../show-one-produit/show-one-produit.component';
import { Component, ViewChild } from '@angular/core';
import { Produit } from '../core/models/Produit';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css'],
})
export class ProduitComponent {
  constructor(
    private serviceProduit: ServiceService,
    private consumerProductService: ConsumerProductService,
    private route: ActivatedRoute
  ) {}
  listProduit!: Produit[];
  ngOnInit() {
    this.consumerProductService.getProducts().subscribe((data) => {
      this.listProduit = data;
    });
  }
  afterReceiveData(id_prod: number) {
    let p = this.listProduit[id_prod - 1];
    p.like++;
    console.log('prodiut', p);
    console.log(p.like);
  }
  @ViewChild(ShowOneProduitComponent) child: any;
  affichemsg() {
    this.child.showMsgChild();
    console.log('msg ' + this.child.showMsgChild);
  }

  prd?: Product;

  afficheProduit(id: any) {
    //  const idproduct = Number(this.route.snapshot.paramMap.get('id'));

    return this.consumerProductService
      .getProductbyid(id)
      .subscribe((data) => (this.prd = data));
  }

}
