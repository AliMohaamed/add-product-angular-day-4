import { Component, output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IProduct } from '../../model/iproduct';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  sendProducts = output<IProduct[]>();
  checkAllDataValid = false;
  products: IProduct[] = [];
  productForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.pattern('^[A-Za-zs-]{2,50}$'),
    ]),
    price: new FormControl('', [Validators.required, Validators.min(10)]),
    quantity: new FormControl('', [Validators.required, Validators.min(1)]),
  });

  get getName() {
    return this.productForm.controls['name'];
  }

  get getPrice() {
    return this.productForm.controls['price'];
  }

  get getQuantity() {
    return this.productForm.controls['quantity'];
  }
  // add product
  addProduct(e: Event) {
    e.preventDefault();
    this.checkAllDataValid = this.productForm.valid;

    if (this.productForm.valid) {
      const product = {
        name: this.productForm.value.name!,
        price: Number(this.productForm.value.price!),
        quantity: Number(this.productForm.value.quantity!),
      };
      const existProduct = this.products.find(
        (item) => item?.name === product.name
      );
      if (!existProduct) {
        this.products.push(product);
      } else {
        this.checkAllDataValid = false;
      }
      console.log('Form Component', this.products);
      // 🔥 Emit the updated list
      this.sendProducts.emit(this.products);
    } else {
      console.warn('Form is invalid!');
      this.productForm.markAllAsTouched();
    }
  }
}
