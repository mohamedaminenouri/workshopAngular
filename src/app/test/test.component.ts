import { ActivatedRoute, Route, Router } from '@angular/router';
import { ConsumerProductService } from '../consumer-product.service';
import { Product } from './../model/product';
import { ServiceService } from './../service.service';
import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { Produit } from '../core/models/Produit';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent {
  constructor(private serviceProduct: ServiceService,private consumer : ConsumerProductService,private route :ActivatedRoute,private r:Router,private pservice:ServiceService) {}
 registerForm!: FormGroup;


ajouter(){
  this.consumer.ajouterProduct(this.registerForm.value).subscribe(
   (data)=>  this.r.navigateByUrl('/product')

  );
}


  listProducts: Produit[] = [];

  ngOnInit() {
    this.listProducts = this.pservice.listProduit;
   // console.log(this.listProducts);

     this.registerForm = new FormGroup({
       id: new FormControl(''),
       libelle: new FormControl(''),
       price: new FormControl(''),
       qte: new FormControl(''),
     });
  }
  modifier(id :any, p:Product){
  //   this.consumer.updatProdcut(id,p).subscribe
  }
}
