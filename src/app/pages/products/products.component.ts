import { Component } from '@angular/core';
import { IProducts } from 'src/app/interfaces/Products';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: IProducts[] = [
    { _id: 1, name: 'Brown Living Room Sofa', price: 80, category: 'Living Room', img: 'https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/living-room-brown-sofa-400x400.png', priceOriginal: 10 },
    { _id: 2, name: 'Egyptian Vase', price: 50, category: 'Home Office', img: 'https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/egyptian-brown-vase-400x400.png', priceOriginal: 30 },
    { _id: 3, name: 'Green Living Room Sofa', price: 30, category: 'Living Room', img: 'https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/living-room-green-sofa-400x400.png', priceOriginal: 40 },
    { _id: 4, name: 'Modern Emerald Fabric Chair', price: 30, category: 'Bathroom', img: 'https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/cream-ceramic-oval-bathtub-400x400.png', priceOriginal: 50 },
    { _id: 5, name: 'Black Metal Lamp', price: 100, category: 'Home Office', img: 'https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/black-metal-lamp-400x400.png', priceOriginal: 20 },
    { _id: 6, name: 'King Size Master Bedroom', price: 10, category: 'Bedroom', img: 'https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/king-size-master-bedroom-400x400.png', priceOriginal: 10 },
    { _id: 7, name: 'Wooden Console Table', price: 20, category: 'Bedroom', img: 'https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/wooden-console-table-400x400.png', priceOriginal: 14 },
    { _id: 8, name: 'Beige Working Chair With Armrest', price: 29, category: 'Home Office', img: 'https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/working-chair-with-armrest-400x400.png', priceOriginal: 15 },
    { _id: 9, name: 'Brown Living Room Sofa', price: 13, category: 'Living Room', img: 'https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/living-room-brown-sofa-400x400.png', priceOriginal: 12 },
    { _id: 10, name: 'Egyptian Vase', price: 24, category: 'Home Office', img: 'https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/egyptian-brown-vase-400x400.png', priceOriginal: 13 },
    { _id: 11, name: 'Green Living Room Sofa', price: 24, category: 'Living Room', img: 'https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/living-room-green-sofa-400x400.png', priceOriginal: 14 },
    { _id: 12, name: 'Modern Emerald Fabric Chair', price: 25, category: 'Bathroom', img: 'https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/cream-ceramic-oval-bathtub-400x400.png', priceOriginal: 10 },
    { _id: 13, name: 'Black Metal Lamp', price: 45, category: 'Home Office', img: 'https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/black-metal-lamp-400x400.png', priceOriginal: 50 },
    { _id: 14, name: 'King Size Master Bedroom', price: 54, category: 'Bedroom', img: 'https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/king-size-master-bedroom-400x400.png', priceOriginal: 30 },
    { _id: 15, name: 'Wooden Console Table', price: 45, category: 'Bedroom', img: 'https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/wooden-console-table-400x400.png', priceOriginal: 14 },
    { _id: 16, name: 'Beige Working Chair With Armrest', price: 23, category: 'Home Office', img: 'https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/working-chair-with-armrest-400x400.png', priceOriginal: 50 },
  ];
  // products: IProducts[] = [];
  // ngOnInit(): void {
  //   // Code thiết lập khi component được khởi tạo
  //   this.productservice.getAll().subscribe(data => {
  //     this.products = data;
  //   })
  // }



  sidebarVisible: boolean = false;
  checked: boolean = false;
  minPrice: number;
  maxPrice: number;
  priceRange: number = 100;
  value: number = 100;


  pageSize: number = 12; // Số sản phẩm hiển thị trên mỗi trang
  currentPage: number = 1; // Trang hiện tại
  totalItems: number = 0; // Tổng số sản phẩm
  totalPages: number = 0; // Tổng số trang
  searchTerm: string = '';


  searchTerm$: Subject<string> = new Subject<string>();

  filteredProducts: IProducts[] = [];
  originalProducts: IProducts[] = [];


  constructor(private productservice: ProductService) {
    this.originalProducts = [...this.products];
    this.filteredProducts = [...this.products];
    // this.minPrice = Math.min(...this.products.map(product => product.price));
    // this.maxPrice = Math.max(...this.products.map(product => product.price));
    this.minPrice = Math.min(...this.products.map((product: IProducts) => product.price));
    this.maxPrice = Math.max(...this.products.map((product: IProducts) => product.price));
  }


  filterByPrice() {
    this.filteredProducts = this.originalProducts.filter(product => {
      return product.priceOriginal !== undefined && product.priceOriginal <= this.priceRange;
    });
  }



  searchProducts() {
    this.currentPage = 1;// 

    if (this.searchTerm || this.priceRange) {
      this.filteredProducts = this.originalProducts.filter(product => {
        const nameMatch = this.searchTerm ? product.name.toLowerCase().includes(this.searchTerm.toLowerCase()) : true;
        const priceMatch = this.priceRange ? product.priceOriginal !== undefined && product.priceOriginal <= this.priceRange : true;
        return nameMatch && priceMatch;
      });
    } else {
      this.filteredProducts = [...this.originalProducts];
    }

  }



}
