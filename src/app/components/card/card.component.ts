import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { IProduct } from '../../model/iproduct';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit, OnChanges {
  @Input() myProducts!: IProduct[];
  flag: boolean = false;
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Change:', changes);
  }
  ngOnInit(): void {
    console.log('FROM Card:', this.myProducts);
  }

  deleteProduct(index: number) {
    this.myProducts.splice(index, 1);
  }

  getOffer(index: number) {
    if (!this.flag) {
      this.myProducts[index].price = this.myProducts[index].price * 0.5;
      this.flag = true;
    }
  }
}
