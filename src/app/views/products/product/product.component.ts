import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../../shared/services/product.service";
import {ProductType} from "../../../../types/product.type";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {

  product: ProductType;
  private subscription: Subscription | null = null;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService, private router: Router) {
    this.product  = {
      id: 0,
      image: '',
      title: '',
      description: '',
      datetime: ''
    }
  }
  ngOnInit(): void {
    this.subscription = this.activatedRoute.params.subscribe((params) => { //здесь queryParams - это специальный объект с типом observable. Тут метод subscribe отслеживает изменения в любой момент и запускает при каждом изменении функцию внутри себя. Мы сделали подписку на изменение этого объекта.
      if(params['id']) {
        // const product = this.productService.getProduct(+params['id']);
        // if(product) {
        //   this.product = product;
        // } else {
        //   this.router.navigate(['/']);
        // }

        this.productService.getProduct(+params['id'])
          .subscribe({
            next: (data) => {
              this.product = data;
            },
            error: (error) => {
              this.router.navigate(['/']);
            }
          });
      }
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

}
