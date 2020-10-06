import {
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { tap } from 'rxjs/operators';

export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    //run code right before the request leaves the app
    // if(req.url)
    // console.log('request is on its way', req);
    const modifiedRequest = req.clone({headers: req.headers.append('Auth', 'xyz')})
    return next.handle(modifiedRequest)
    // .pipe(tap(event => {
    //   console.log(event)
    //   if(event.type === HttpEventType.Response){
    //     console.log('response arrived, body data: ', event.body)
    //   }
    // }));
  }
}
