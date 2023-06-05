import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  products: any;
  constructor(private productservice: ProductService) { }
  ngOnInit(): void {
    // Code thiết lập khi component được khởi tạo
    this.productservice.getAll().subscribe(data => {
      this.products = data
    })
  }
}
