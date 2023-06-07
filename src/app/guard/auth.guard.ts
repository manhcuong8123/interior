import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const user = localStorage.getItem('user');
    if (user) {
      // Kiểm tra role của người dùng
      const userObj = JSON.parse(user);
      if (userObj.role === 'admin') {
        // Nếu người dùng có role admin, cho phép truy cập vào trang admin
        return true;
      } else {
        // Nếu người dùng không có role admin, hiển thị thông báo và chuyển hướng đến trang khác
        alert('Bạn không phải là admin!');
        this.router.navigate(['/']);
        return false;
      }
    } else {
      // Nếu không có người dùng, chuyển hướng đến trang đăng nhập
      alert('Bạn Phải Đăng Nhập Để vào admin!');
      this.router.navigate(['/vippro/signin']);
      return false;
    }
  }
}