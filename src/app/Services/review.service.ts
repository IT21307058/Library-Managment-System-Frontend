import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private httpClient : HttpClient) { }

  saveReview(inputData : object, bookId: Number){
    return this.httpClient.post(`http://localhost:9091/api/${bookId}/review`, inputData);
  }
}
