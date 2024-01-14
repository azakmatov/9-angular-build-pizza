import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable, tap} from "rxjs";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {
  }

  //  функция intercept модифицирует исходный запрос и возвращает объект Observable типа HttpEvent, то есть входящий запрос - это параметр req типа HttpRequest<any>, второй параметр next - это специальный хендлер, который имеет один метод handle, в который мы должны передать уже изменённый запрос и он сформирует для нас Observable
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const authToken = this.authService.getToken();
    // просто для проверки выводим в консоль
    // console.log(req);
    const authReq = req.clone({
        headers: req.headers.set('Authorization', authToken)
    }); // создаёт копию и возвращает изменённый экземпляр запроса, так как мы не можем изменять req (req - это не изменяемый объект), а можем просто заменить его изменённым клоном
    // return next.handle(req); //это стандартное поведение, которое никак не меняет запрос
    // return next.handle(authReq);
    return next.handle(authReq).pipe( // исправление ответа на запрос
      tap({ // здесь можно выполнять обновление токенов при использовании jwt-токенов и если токен истёк
        next: (event) => {
          if(event instanceof HttpResponse) {
            console.log(event);
          }
        }
      })
    ); // готовый observable-экземпляр
  }
}
