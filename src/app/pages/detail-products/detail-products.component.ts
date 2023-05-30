import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProducts } from 'src/app/interfaces/Products';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-detail-products',
  templateUrl: './detail-products.component.html',
  styleUrls: ['./detail-products.component.css']
})
export class DetailProductsComponent {
  // product: IProducts[] = [
  //   { _id: 1, name: 'Brown Living Room Sofa', title: 'Habitasse eaque wisi molestie, mollis pharetra convallis exercitation, distinctio eu arcu fugit nibh donec exercitationem, quisque imperdiet mattis.', price: 80, category: 'Living Room', img: 'https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/living-room-brown-sofa-400x400.png', priceOriginal: 10 },
  // ];
  product: IProducts = {
    name: "",
    price: 0,
    title: "",
    category: "",
    priceOriginal: 0,
    img: "",
  }
  products: IProducts[] = [
    { _id: 1, name: 'Brown Living Room Sofa', price: 100, category: 'Living Room', img: 'https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/living-room-brown-sofa-400x400.png', priceOriginal: 120 },
    { _id: 3, name: 'Green Living Room Sofa', price: 300, category: 'Living Room', img: 'https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/living-room-green-sofa-400x400.png', priceOriginal: 140 },
    { _id: 7, name: 'Wooden Console Table', price: 300, category: 'Living Room', img: 'https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/wooden-console-table-400x400.png', priceOriginal: 140 },
    { _id: 8, name: 'Beige Working Chair With Armrest', price: 400, category: 'Living Room ', img: 'https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/working-chair-with-armrest-400x400.png', priceOriginal: 150 },

  ]

  value2: number = 0;
  value: any;
  valueText: string = "";
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.route.paramMap.subscribe(param => {
      const id = Number(param.get('id'));
      this.productService.getOne(id).subscribe(product => {
        this.product = product;
      })
    })

  }
}
