import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) { 
    let authentication = '';
    this.authenticationService.loginCredentials.subscribe(val=> {
      authentication = JSON.stringify(val);}
      );
    const authReq = req.clone({ 
    headers: req.headers.set('Authorization', authentication)
    }); 
    return next.handle(authReq); 
  }

}
