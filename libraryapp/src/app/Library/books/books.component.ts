import { Component, OnInit } from '@angular/core';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  public books: any;
  public booksSubject: string;
  public loading: boolean = false;

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    
  }

  onChangeSubject(event: any){
    this.loading = true;
    this.booksService.getSubject(event.target.innerText.toLowerCase())
    .subscribe((response) =>{
      this.loading=false;
      this.books = response["works"]
      this.booksSubject = event.target.innerText
    })
  }
}
