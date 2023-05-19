import { Component } from '@angular/core';
import { IProducts } from 'src/app/interfaces/Products';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  products:IProducts[]=[
    {_id:1,name:'Brown Living Room Sofa',price:100,category:'Living Room',img:'https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/living-room-brown-sofa-400x400.png',priceOriginal:120},
    {_id:2,name:'Egyptian Vase',price:200,category:'Home Office',img:'https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/egyptian-brown-vase-400x400.png',priceOriginal:130},
    {_id:3,name:'Green Living Room Sofa',price:300,category:'Living Room',img:'https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/living-room-green-sofa-400x400.png',priceOriginal:140},
    {_id:4,name:'Modern Emerald Fabric Chair',price:400,category:'Chair',img:'https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/furniture-green-fabric-chair-400x400.png',priceOriginal:150}

  ]
}
