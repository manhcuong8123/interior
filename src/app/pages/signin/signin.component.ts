import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers: [MessageService]
})
export class SigninComponent {
  loginForm: FormGroup;
  submitted = false;


  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  submitForm() {
    this.submitted = true;
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      this.authService.signIn(formData.email, formData.password)
        .subscribe(
          result => {
            console.log(result);
            localStorage.setItem('accessToken', result.accessToken);
            localStorage.setItem('user', JSON.stringify(result.user));
            if (result.user.role == "admin") {
              this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Đăng Nhập Admin Thành Công !' });
              setTimeout(() => {
                this.router.navigate(['/admin'], { relativeTo: this.route });
              }, 2000)
            } else {
              this.messageService.add({ severity: 'success', summary: 'Success', detail: result.message });
              setTimeout(() => {
                this.router.navigate(['/'], { relativeTo: this.route });
              }, 2000)
            }
          },
          error => {
            // Xử lý lỗi
            if (error instanceof HttpErrorResponse) {
              this.messageService.add({ severity: 'warn', summary: 'Warn', detail: error.error.message });
            } else {
              alert('Đã xảy ra lỗi');
            }
          }
        );
    }
  }
}