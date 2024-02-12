import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { ConsumerProductService } from '../consumer-product.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css'],
})
export class UpdateProductComponent {
  formGroup!: FormGroup;
  id!: number;
  product!: Product;
  constructor(
    private route: ActivatedRoute,
    private con: ConsumerProductService,
    private rout: Router
  ) {}
  ngOnInit() {
    this.formGroup = new FormGroup({
      id: new FormControl(),
      libelle: new FormControl(),
      prix: new FormControl(),
      qte: new FormControl(),
    });
    this.id = this.route.snapshot.params['id'];
    this.con.getProductbyid(this.id).subscribe((data) => {
      this.product = data;
      this.formGroup.patchValue(this.product);
    });
  }

  update() {
    this.con
      .updatProdcut(this.id, this.formGroup.value)
      .subscribe(() => this.rout.navigateByUrl('produit'));
  }
}
