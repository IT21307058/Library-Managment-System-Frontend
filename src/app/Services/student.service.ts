import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface StudentResponse{
  "authorId":number
  "name":string
  "books":any[]
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient : HttpClient) { 
    
  }

  getStudents(){
    return this.httpClient.get(`http://localhost:9091/api/author/`);
  }

  saveStudent(inputData : object){
    return this.httpClient.post(`http://localhost:9091/api/author/`, inputData);
  }

  destryStudent(authorId:Number){
    return this.httpClient.delete(`http://localhost:9091/api/author/${authorId}`)
  }
}
