import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface BookResponse {
  "content": any
  "pageNumber": number
  "pageSize": number,
  "totalElements": number,
  "totalPages": number,
  "lastPage": number
}

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) { }

  saveBook(inputData: object, authorId: number) {
    return this.httpClient.post(`http://localhost:9091/api/book/${authorId}/`, inputData);
  }

  getBooks(pageNumber: number, pageSize: number, sortBy: string, sortDir: string) {
    return this.httpClient.get(`http://localhost:9091/api/book/?pageNumber=${pageNumber}&pageSize=${pageSize}&sortBy=${sortBy}&sortDir=${sortDir}`);
  }

  deleteBooks(bookid: Number) {
    return this.httpClient.delete(`http://localhost:9091/api/book/${bookid}`)
  }

  getImage(imageName: String) {
    return this.httpClient.get(`http://localhost:9091/api/book/image/${imageName}`)
  }

  getOneBook(bookid: Number) {
    return this.httpClient.get(`http://localhost:9091/api/book/${bookid}`)
  }

  updateBook(inputData: object, bookid: number) {
    return this.httpClient.put(`http://localhost:9091/api/book/${bookid}`, inputData)
  }

  searchBook(keyword:string){
    return this.httpClient.get(`http://localhost:9091/api/book/search/${keyword}`)
  }
}
