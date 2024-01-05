import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductType} from "../../../../types/product.type";
import {ProductService} from "../../../shared/services/product.service";
import {CartService} from "../../../shared/services/cart.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {catchError, map, of, retry, Subscription, tap} from "rxjs";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  constructor(private productService: ProductService, private cartService: CartService, private router: Router,
              private http: HttpClient) {}

  public products: ProductType[] = [];
  loading: boolean = false;
  private subscription: Subscription | null = null;
  ngOnInit(): void {
    this.loading = true;
    // this.products = this.productService.getProducts();
    // Здесь в get<ProductType[]> - это утверждение типа
    // this.http.get<ProductType[]>('http://testologia.site/pizzas')

    // чтобы получить в другом формате выполняем запрос с параметром extraField=1 (для теста и сделать промежуточную обработку данных), то есть мы получаем в результате запроса всё в дополнительном массиве с ключом data
    // this.http.get<{data: ProductType[]}>('http://testologia.site/pizzas?extraField=1')
    // this.productService.getProducts()
    this.subscription = this.productService.getProducts()
      // .pipe(
      //   tap((result) => { //можно делать любое действие в tap, но основной поток данных не будет изменён
      //     console.log(result);
      //   }),
      //   map((result) => (result.data)),
      //   catchError(error => {
      //     // throw new Error('omg'); // catchError будет выполнен только тогда, когда observable вернёт ошибку
      //     return of([]); //таким образом мы не выбрасываем ошибку, а возвращаем новый observable с пустым массивом, чтобы не остановить observable
      //   }),
      //   retry(3)
      // )
      .pipe(
        tap(() => {
          this.loading = false;
        })
      )
      .subscribe(
        {
          next: (data) => {
            this.products = data;
            console.log('next');
          },
          error: (error) => {
            console.log(error);
            this.router.navigate(['/']);
          }
        }
        );
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  // здесь тоже нам не нужна эта функция, так как вместо кнопки мы используем ссылку на /product {product: product.title} в product.component.html
  // public addToCart(title: string): void {
  //   this.cartService.product = title;
  //   // this.router.navigate(['/order', {product: title}]); //тут второй параметр - это параметр url-строки, но тут получается не верный параметр url
  //   this.router.navigate(['/order'], {queryParams: {product: title}}); //тут второй параметр - это правильный параметр url-строки, здесь добавляем параметр product с содержанием названия товара
  // }
}
