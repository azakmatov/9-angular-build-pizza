import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {CartService} from "../../../shared/services/cart.service";
import {from, map, Observable, Subject, Subscription} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {PopupComponent} from "../../../shared/components/popup/popup.component";
import {PopComponent} from "../../../shared/components/pop/pop.component";
import {Router} from "@angular/router";

// declare var bootstrap: any;
// import * as bootstrap from "bootstrap";
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy, AfterViewInit {
  // private observable: Observable<number>;
  // private promise: Promise<string>;
  private subscription: Subscription | null = null;
  private subject: Subject<number>;

  constructor(public cartService: CartService, private modalService: NgbModal, private router: Router) { // тут инжектим NgbModal

    this.subject = new Subject<number>();

    let count = 0;
    const interval = setInterval(() => {
      this.subject.next(count++); // в каждом observable мы должны использовать метод next, иначе observable ничего не передаст
    }, 1000);

    // setTimeout(() => {
    //   observer.next(count++); // в каждом observable мы должны использовать метод next, иначе observable ничего не передаст
    // }, 1000);
    const timeout1 = setTimeout(() => {
      this.subject.complete();
    }, 4000);

    // this.observable = from([1, 2, 3, 4, 5]);

    //здесь создаём новый экземпляр Observable, но он ещё не будет запускаться
    // this.observable = new Observable((observer) => {
    //   let count = 0;
    //   const interval = setInterval(() => {
    //     observer.next(count++); // в каждом observable мы должны использовать метод next, иначе observable ничего не передаст
    //   }, 1000);
    //
    //   // setTimeout(() => {
    //   //   observer.next(count++); // в каждом observable мы должны использовать метод next, иначе observable ничего не передаст
    //   // }, 1000);
    //   const timeout1 = setTimeout(() => {
    //     observer.complete();
    //   }, 4000);
    //   const timeout2 = setTimeout(() => {
    //     observer.error('world');
    //   }, 5000);
    //
    //   // правильное завершение observable
    //   return {
    //     unsubscribe() {
    //       clearInterval(interval);
    //       clearTimeout(timeout1);
    //       clearTimeout(timeout2);
    //     }
    //   }
    // });

    // this.promise = new Promise<string>(resolve => {
    //   setTimeout(() => {
    //     resolve('hello'); // в каждом observable мы должны использовать метод next, иначе observable ничего не передаст
    //   }, 2000);
    // });
  }

  // @ViewChild('popup')
  // popup!: TemplateRef<ElementRef>;

  ngOnInit() {

    // const myModalAlternative = new bootstrap.Modal('#myModal', {});
    // myModalAlternative.show();

    // вот тут теперь экземпляр Observable будет запускаться
    // this.subscription = this.observable
    this.subscription = this.subject
      .pipe(
       map((number) => {
         return number * 10;
       })
      )
      .subscribe({
      next: (param: number) => {
        console.log('subscribe 1: ', param);
      },
      complete: () => {
        console.log('subscribe 1: завершился');
      },
      error: (error: string) => {
        console.log('ERROR!!! ' + error);
      }
    });
    // это второй подписчик объекта observable и получается hello выведется 2 раза
    // this.observable.subscribe((param: string) => {
    //   console.log(param + ' 2');
    // });

    // это промис выполняется и в итоге выведется hello три раза
    // this.promise.then((param: string) => {
    //   console.log(param + ' promise');
    // });
  }


  @ViewChild(PopComponent)
  private popComponent!: PopComponent;

  ngAfterViewInit() {
    // this.modalService.open(this.popup, {});

    // // const modalRef = this.modalService.open(NgbdModalContent);
    // const modalRef = this.modalService.open(PopupComponent); // мы сюда обращаемся по имени класса PopupComponent
    // // modalRef.componentInstance.name = 'World';
    // modalRef.componentInstance.data = 'Main component';

    // this.popComponent.open(); //лучше не будем выводить попап на главном окне
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  // test(popup: TemplateRef<ElementRef>) {
  test() {

    // this.modalService.open(popup, {ariaDescribedBy: 'modal-basic-title'});
    // this.modalService.open(this.popup, {});

    // this.subscription = this.observable
    this.subscription = this.subject
      .pipe(
        map(number => {
          return 'Число: ' + number;
        })
      )
      .subscribe((param: string) => {
      console.log(param + ' click');
    });
    this.router.navigate(['/products']);
  }

}
