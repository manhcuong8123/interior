import { Injectable } from '@angular/core';
import { Product } from '../interfaces/Products';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  
  getAll(): Observable<any> {
    const headers = new HttpHeaders().set('Cache-Control', 'no-cache');
    return this.http.get<any>('https://644ff66cba9f39c6ab70ffb4.mockapi.io/products', { headers });
  }
  getOne(id: number): Observable<any> {
    return this.http.get<any>(`https://644ff66cba9f39c6ab70ffb4.mockapi.io/products/${id}`);
  }
  getPost(product: Product): Observable<any> {
    return this.http.post<Product>(`https://644ff66cba9f39c6ab70ffb4.mockapi.io/products`, product);
  }
  getPut(product: Product): Observable<any> {
    return this.http.put<Product>(`https://644ff66cba9f39c6ab70ffb4.mockapi.io/products/${product.id}`, product);
  }
  getDelete(id: any): Observable<any> {
    return this.http.delete<any>(`https://644ff66cba9f39c6ab70ffb4.mockapi.io/products/${id}`);
  }
  getDeleteAll(): Observable<any> {
    return this.http.delete<any>(`https://644ff66cba9f39c6ab70ffb4.mockapi.io/products`);
  }
}
