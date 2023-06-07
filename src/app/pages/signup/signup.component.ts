import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [MessageService]
})
export class SignupComponent {
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
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      reppassword: ['', Validators.required]
    },)
  }

  submitForm() {
    this.submitted = true;
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      //xử lí đăng kí
      this.authService.signUp(formData.username, formData.email, formData.password, formData.reppassword)
        .subscribe(
          (response) => {
            // Xử lý phản hồi thành công từ API
            console.log(response);
            this.messageService.add({ severity: 'success', summary: 'Success', detail: response.message });
            setTimeout(() => {
              this.router.navigate(['/vippro/signin']);
            }, 2500);
          },
          error => {
            // Xử lý lỗi
            if (error instanceof HttpErrorResponse) {
              this.messageService.add({ severity: 'warn', summary: 'Warn', detail: error.error.message });
            } else {
              alert('Đã xảy ra lỗi');
            }
          }
        )
    }
  }
}
