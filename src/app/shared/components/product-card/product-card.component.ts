import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import {ProductType} from "../../../../types/product.type";
import {TitleComponent} from "../title/title.component";
import {CartProductService} from "../../services/cart-product.service";
@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  providers: [CartProductService] // На уровне компонента, для каждого продукт будет создаваться новый экземпляр
})
export class ProductCardComponent {
  @Input() product: ProductType;
  @Output() addToCartEvent: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild(TitleComponent)
  private titleComponent!: TitleComponent;
  @ViewChild('elem')
  private elem!: ElementRef; //но это свойство не будет доступно в конструкторе этого класса и в ngOnInit
  constructor(public cartProductService: CartProductService) { //чтобы не создавать лишних переменных сделали public
    this.product  = {
      id: 0,
      image: '',
      title: '',
      description: '',
      datetime: ''
    }
  }
  // теперь эту функцию можно убрать, так как вместо неё мы используем ссылку на /product передавая {product: product.title}
  // addProductToCart() {
  //   this.addToCartEvent.emit(this.titleComponent.title);
  //   this.cartProductService.count++;
  // }
}
