import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  getSubject(subject: string){
    return this.http.get("http://openlibrary.org/subjects/" + subject + ".json?limit=3")
  }
}