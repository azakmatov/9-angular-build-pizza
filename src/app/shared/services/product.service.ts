import { Injectable } from '@angular/core';
import {ProductType} from "../../../types/product.type";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {//catchError, map,
  Observable,
  //of, retry, tap
} from "rxjs";

@Injectable({ // для поддержки общей структуры провайдинга мы убрали из app.module.ts из секции providers   //на уровне всего приложения
  providedIn: 'root'
})

// @Injectable() //без передачи параметров, но мы при этом добавили в app.module.ts в секции providers
export class ProductService {

  constructor(private http: HttpClient) { }

  private products: ProductType[] = [];
  //   [{
  //     id: 1,
  //     image: 'product1.png',
  //     title: 'Мясная Делюкс',
  //     description: 'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус чили, ананасы',
  //     datetime: '2022-12-31 15:00:00'
  //   },
  //   {
  //     id: 2,
  //     // image: 'product2.png',
  //     image: '',
  //     title: 'Морская Премиум',
  //     description: 'Перец, сыр, креветки, кальмары, мидии, лосось',
  //     datetime: '2022-01-31 15:00:00'
  //   },
  //   {
  //     id: 3,
  //     image: 'product3.png',
  //     title: 'Бекон и Сосиски',
  //     description: 'Бекон, сыр, сосиски, ананас, томатная паста',
  //     datetime: '2022-12-31 15:00:00'
  //   },
  //   {
  //     id: 4,
  //     image: 'product4.png',
  //     title: 'Куриная Делюкс',
  //     description: 'Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста',
  //     datetime: '2022-12-31 19:00:00'
  //   },
  //   {
  //     id: 5,
  //     image: 'product5.png',
  //     title: 'Барбекю Премиум',
  //     description: 'Свинина BBQ, соус Барбкею, сыр, курица, соус для пиццы, соус чил',
  //     datetime: '2022-12-31 15:00:00'
  //   },
  //   {
  //     id: 6,
  //     image: 'product6.png',
  //     title: 'Пепперони Дабл',
  //     description: 'Пепперони, сыр, колбаса 2 видов: обжаренная и вареная',
  //     datetime: '2022-12-31 15:00:00'
  //   },
  //   {
  //     id: 7,
  //     image: 'product7.png',
  //     title: 'Куринов Трио',
  //     description: 'Жареная курица, Тушеная курица, Куриные наггетсы, перец, сыр, грибы, соус для пиццы',
  //     datetime: '2022-10-31 15:00:00'
  //   },
  //   {
  //     id: 8,
  //     image: 'product8.png',
  //     title: 'Сырная',
  //     description: 'Сыр Джюгас, Сыр с плесенью, Сыр Моцарелла, Сыр секретный',
  //     datetime: '2022-12-31 15:00:00'
  //   }
  // ];

  // getProducts(): Observable<ProductType[]> {
  //   let params = new HttpParams();
  //   params = params.set('extraField', 1)
  //   // return this.http.get<{data: ProductType[]}>('http://testologia.site/pizzas?extraField=1', { // тут объект опций. В observer мы получаем полный весь запрос, а не только тело запроса
  //   return this.http.get<{data: ProductType[]}>('http://testologia.site/pizzas', { // тут объект опций. В observer мы получаем полный весь запрос, а не только тело запроса
  //     observe: 'response',
  //     headers: new HttpHeaders({ // заголовки
  //       Authorization: 'auth-token'
  //     }),
  //     params: params
  //     // responseType: "text" // если сервер возвращает не JSON объект, то можно указать тип текст и так его обрабатывать
  //   })
  //     .pipe(
  //       tap(result => {
  //         console.log(result);
  //       }),
  //       // map((result) => (result.body!.data)), // при получении полного запроса пишем result.body!.data , иначе просто result.data
  //       map((result) => (result.body ? result.body.data : [])),
  //       // map((result: string) => (result.body ? result.body.data : [])), // если responseType: "text", то result будет типом string
  //     );
  // }

  getProducts(): Observable<ProductType[]> {
        return this.http.get<ProductType[]>('https://testologia.site/pizzas', {
          headers: new HttpHeaders({
            Authorization: 'auth-token'
          })
        });
  }

  getProduct(id: number): Observable<ProductType> {
    return this.http.get<ProductType>(`https://testologia.site/pizzas?id=${id}`);
    //ajax - запрос на сервер
    // return this.products.find(item => (item.id === id));
  }

  createOrder(data: { product: string, address: string, phone: string }) {
    return this.http.post<{success: boolean, message?: string }>('https://testologia.site/order-pizza', data);
  }
}
