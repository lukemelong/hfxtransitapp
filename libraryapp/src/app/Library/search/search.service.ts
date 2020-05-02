import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  getBookByISBN(query){
    return this.http.get("http://openlibrary.org/api/books?jscmd=data&format=json&bibkeys=" + query)
  }

  searchBooks(query){
    return this.http.get("http://openlibrary.org/search.json?q=" + query.replace(" ", "+"))
  }
}
