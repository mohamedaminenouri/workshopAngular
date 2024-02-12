import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produit } from './core/models/Produit';

@Injectable({
  providedIn: 'root',
})
export class ConsumerProductService {
  constructor(private http: HttpClient) {}
  getProducts() {
    return this.http.get<Produit[]>('http://localhost:3000/products');
  }

  getProductbyid(id: number) {
    return this.http.get<Produit>('http://localhost:3000/products' + '/' + id);
  }
  ajouterProduct(p: Produit) {
    return this.http.post<Produit>('http://localhost:3000/products', p);
  }

  updatProdcut(idp: number,p: Produit) {
    return this.http.put('http://localhost:3000/products' + '/' + idp  ,  p);
  }
}
