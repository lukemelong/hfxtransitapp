import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public ibnBook: any;
  public searchBooks: any;
  public query: string;

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  onGetBookByISBN(){
    this.searchService.getBookByISBN(this.query)
    .subscribe((response) => {
      this.ibnBook = response[this.query]
    })
  }

  onSearchBooks(){
    this.searchService.searchBooks(this.query)
    .subscribe((response) => {
      this.searchBooks = response["docs"]
    })
  }

}
