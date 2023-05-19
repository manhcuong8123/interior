import { Component } from '@angular/core';
import { IProducts } from 'src/app/interfaces/Products';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
  products:IProducts[]=[
    {_id:1,name:'Brown Living Room Sofa',price:100,category:'Living Room',img:'https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/living-room-brown-sofa-400x400.png',priceOriginal:120},
    {_id:2,name:'Egyptian Vase',price:200,category:'Home Office',img:'https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/egyptian-brown-vase-400x400.png',priceOriginal:130},
    {_id:3,name:'Green Living Room Sofa',price:300,category:'Living Room',img:'https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/living-room-green-sofa-400x400.png',priceOriginal:140},
    {_id:4,name:'Modern Emerald Fabric Chair',price:400,category:'Bathroom',img:'https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/cream-ceramic-oval-bathtub-400x400.png',priceOriginal:150},
    {_id:5,name:'Black Metal Lamp',price:100,category:'Home Office',img:'https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/black-metal-lamp-400x400.png',priceOriginal:120},
    {_id:6,name:'King Size Master Bedroom',price:200,category:'Bedroom',img:'https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/king-size-master-bedroom-400x400.png',priceOriginal:130},
    {_id:7,name:'Wooden Console Table',price:300,category:'Bedroom',img:'https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/wooden-console-table-400x400.png',priceOriginal:140},
    {_id:8,name:'Beige Working Chair With Armrest',price:400,category:'Home Office',img:'https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/working-chair-with-armrest-400x400.png',priceOriginal:150},

  ]
}
