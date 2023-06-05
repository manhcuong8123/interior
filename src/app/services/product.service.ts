import { Injectable } from '@angular/core';
import { Product } from '../interfaces/Products';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<any> {
    return this.http.get<any>(`https://644ff66cba9f39c6ab70ffb4.mockapi.io/products`);
  }
  getOne(id: number): Observable<any> {
    return this.http.get<any>(`https://644ff66cba9f39c6ab70ffb4.mockapi.io/products/${id}`);
  }
  getPost(product: Product): Observable<any> {
    return this.http.post<Product>(`https://644ff66cba9f39c6ab70ffb4.mockapi.io/products`, product);
  }
  getPut(product: Product): Observable<any> {
    return this.http.put<Product>(`https://644ff66cba9f39c6ab70ffb4.mockapi.io/products/${product._id}`, product);
  }
  getDelete(id: number): Observable<any> {
    return this.http.delete<any>(`https://644ff66cba9f39c6ab70ffb4.mockapi.io/products/${id}`);
  }
}
