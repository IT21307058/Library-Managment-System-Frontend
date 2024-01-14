import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface BookResponse{
  "bookid": number
  "authorId": number
  "title":string
  "description":string
}

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) { }

  saveBook(inputData : object, authorId: number){
    return this.httpClient.post(`http://localhost:9091/api/book/${authorId}/`, inputData);
  }

  getBooks(){
    return this.httpClient.get(`http://localhost:9091/api/book/`);
  }

  deleteBooks(bookid: Number){
    return this.httpClient.delete(`http://localhost:9091/api/book/${bookid}`)
  }
}
