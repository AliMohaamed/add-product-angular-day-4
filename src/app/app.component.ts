import { Component } from '@angular/core';
import { FormComponent } from './components/form/form.component';
import { CardComponent } from './components/card/card.component';
import { IProduct } from './model/iproduct';

@Component({
  selector: 'app-root',
  imports: [FormComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  products: IProduct[] = [];
  handleProducts(productsFromForm: IProduct[]) {
    this.products = productsFromForm;
  }
}
