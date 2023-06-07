import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  sidebarVisible: boolean = false;
  value3: number = 1;
  user: any;
  userStr!: string | null;
  constructor() { }

  ngOnInit() {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      this.user = JSON.parse(userStr);
    } else {
      this.user = null
      // handle the case where userStr is null or undefined
    }
  }

}
