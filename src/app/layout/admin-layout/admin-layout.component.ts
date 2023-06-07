import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Product } from 'src/app/interfaces/Products';
import { ProductService } from 'src/app/services/product.service';
import { forkJoin } from 'rxjs';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-admin-layout',
    templateUrl: './admin-layout.component.html',
    styleUrls: ['./admin-layout.component.scss'],
    providers: [MessageService, ConfirmationService]
})
export class AdminLayoutComponent implements OnInit {
    productDialog: boolean = false;

    products: Product[] = [];

    product: any;

    selectedProducts: Product[] = [];

    submitted: boolean = false;

    statuses: any[] = [];

    constructor(
        private productService: ProductService,
        private messageService: MessageService,
        private confirmationService: ConfirmationService,
        // private photoService: PhotoService
    ) { }

    ngOnInit() {
        this.productService.getAll().subscribe((data: Product[]) => {
            this.products = data;
          });
        // this.statuses = [
        //     { label: 'INSTOCK', value: 'instock' },
        //     { label: 'LOWSTOCK', value: 'lowstock' },
        //     { label: 'OUTOFSTOCK', value: 'outofstock' }
        // ];
    }

    openNew() {
        this.product = {};
        this.submitted = false;
        this.productDialog = true;
    }

    deleteSelectedProducts() {
        this.confirmationService.confirm({
          message: 'Ấn yes xóa hết kỷ niệm chúng ta ...',
          header: 'Suy nghĩ thật kỹ nào ',
          icon: 'bx  bx-exclamation-triangle',
          accept: () => {
            const deleteRequests: Observable<any>[] = [];
      
            for (const product of this.selectedProducts) {
              deleteRequests.push(this.productService.getDelete(product.id));
            }
      
            if (deleteRequests.length > 0) {
              // Sử dụng 'forkJoin' để chờ cho tất cả các yêu cầu xóa hoàn thành
              forkJoin(deleteRequests).subscribe(() => {
                this.products = [];
                this.selectedProducts = [];
                this.messageService.add({ severity: 'success', summary: 'Thành công', detail: 'Đã xóa hết sản phẩm', life: 3000 });
                this.productService.getAll().subscribe((data: Product[]) => {
                  this.products = data;
                });
              });
            }
          }
        });
      }
      
    

    editProduct(product: Product) {
        this.product = { ...product };
        this.productDialog = true;
    }

    deleteProduct(product: Product) {
        this.confirmationService.confirm({
            message: 'Em muốn xóa ' + product.name  + ' khỏi cuộc tình này ư ?',
            header: 'Confirm',
            icon: 'bx bx-exclamation-triangle',
            accept: () => {
                const index = this.products.findIndex(p => p.id === product.id);
                if (index !== -1) {
                    this.productService.getDelete(product.id).subscribe(() => {
                        this.products.splice(index, 1);
                        this.selectedProducts = [];
                        this.messageService.add({ severity: 'success', summary: 'Successful', detail:`Đã xóa sản phẩm : ${product.name}`, life: 3000 });
                    });
                }
            }
        });
    }

    hideDialog() {
        this.productDialog = false;
        this.submitted = false;
    }

    saveProduct() {
        this.submitted = true;
      
        if (this.product.name.trim()) {
          if (this.product.id) {
            this.productService.getPut(this.product).subscribe(() => {
              const index = this.findIndexById(this.product.id);
              if (index !== -1) {
                this.products[index] = this.product;
                this.messageService.add({ severity: 'success', summary: 'Aloooooo', detail: 'Đã update', life: 3000 });
                this.productDialog = false;
                this.product = {};
              }
            });
          } else {
            this.product.id = this.createId();
            this.product.image = 'product-placeholder.svg';
            this.productService.getPost(this.product).subscribe(() => {
              this.products.push(this.product);
              this.messageService.add({ severity: 'success', summary: 'Aloooooo', detail: 'Thêm rồi nhé baby', life: 3000 });

              this.productDialog = false;
              this.product = {};
            });
          }
        }
      }
    

    findIndexById(id: string): number {
        let index = -1;
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].id === id) {
                index = i;
                break;
            }
        }
        return index;
    }
    createId(): string {
        let id = '';
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }
  
    
}