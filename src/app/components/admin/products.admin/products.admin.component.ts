import { Component } from '@angular/core';
import { ProductList } from '../../../models/ProductList';
import { ProductsAdminService } from '../../../service/admin/products.admin.service';

@Component({
  selector: 'app-products.admin',
  templateUrl: './products.admin.component.html',
  styleUrl: './products.admin.component.css'
})
export class ProductsAdminComponent {
  constructor(private productAdminService: ProductsAdminService) {

  }

  productsModel: any;

  ngOnInit() {
    this.productAdminService.showProducts().subscribe(
      response => this.productsModel = response,
      error => console.log(error)
    )
  }

  delete(productId: number) {
    this.productAdminService.delete(productId).subscribe({
      next: (response) => {
        this.productsModel = this.productsModel.filter((product: { productId: number }) => product.productId !== productId);
        console.log(response); // Log the response from the server
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  newProductModel = new ProductList(0, 'Toys', 'Chew Toy', 'Durable chew toy for dogs, helps promote dental health', 1400);
  //bad way of adding products
  // addNewProduct() {
  //   this.productAdminService.addNewProduct(this.newProductModel).subscribe(
  //     (response) => { 
  //       console.log(response); 

  //     },
  //     (error) => {
  //       console.log(error)
  //     }
  //   )
  //   // window.location.reload();
  //   // window.location.reload();
  // }

  //even betteeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeer code
  addNewProduct() {
    this.productAdminService.addNewProduct(this.newProductModel).subscribe({
      next: (response) => this.productsModel.push(response),
      error: (error) => console.log(error)
    });
  }
}
