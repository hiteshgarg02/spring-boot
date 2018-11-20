import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthenticationService implements HttpInterceptor {

  constructor(private _http: HttpClient) { }

  private credentials = new BehaviorSubject({});
  loginCredentials = this.credentials.asObservable();

  saveCredentials(cred: any) {
    this.credentials.next(cred)
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) { 
    let authentication = '';
    this.loginCredentials.subscribe(val=> {
      authentication = JSON.stringify(val);}
      );
    const authReq = req.clone({ 
    headers: req.headers.set('Authorization', authentication)
    }); 
    return next.handle(authReq); 
  }
}
