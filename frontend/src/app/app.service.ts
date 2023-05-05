import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInfo } from './Login/userInfo';
import { OrderComponent } from './Orders/app.order-component';
import { Order } from './Orders/order';
import { Review } from './Reviews/review';

@Injectable({providedIn:"root"})
export class AppService {
    httpClient: HttpClient;

    constructor(http: HttpClient){
        this.httpClient = http;
    }
  
    fetchMenu(): Observable<any>
    {
      return this.httpClient.get<{message: string, data: any[]}>('http://localhost:5001/api/menu/get-menu');
    }

    fetchReviews(): Observable<any>
    {
      return this.httpClient.get<{message: string, data: any}>('http://localhost:5001/api/reviews/get-all');
    }

    postReview(review: Review): Observable<any>
    {
        return this.httpClient.post<Review>('http://localhost:5001/api/reviews/create-new', review);
    }

    postLogin(loginInfo: UserInfo): Observable<any>
    {
        return this.httpClient.post<UserInfo>('http://localhost:5001/api/user/login', loginInfo);
    }

    postRegister(registerInfo: UserInfo): Observable<any>
    {
        return this.httpClient.post<UserInfo>('http://localhost:5001/api/user/register', registerInfo);
    }

    postOrder(order: Order): Observable<any>
    {
        return this.httpClient.post<Order>('http://localhost:5001/api/order/new-order', order);
    }

}