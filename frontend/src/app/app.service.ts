import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

    postReview(review: Review): Observable<Review>
    {
        alert('made it here');
        return this.httpClient.post<Review>('http://localhost:5001/api/reviews/create-new', review);
    }

}