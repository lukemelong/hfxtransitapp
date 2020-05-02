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

  public loading: boolean = false;

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  onGetBookByISBN(){
    this.loading = true;
    this.searchService.getBookByISBN(this.query)
    .subscribe((response) => {
      this.loading = false;
      this.ibnBook = response[this.query]
    })

    this.searchBooks = null;
  }

  onSearchBooks(){
    this.loading = true;
    this.searchService.searchBooks(this.query)
    .subscribe((response) => {
      this.loading = false;
      this.searchBooks = response["docs"]
    })

    this.ibnBook = null;
  }

  
}
