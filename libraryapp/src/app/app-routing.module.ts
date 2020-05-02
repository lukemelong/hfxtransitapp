import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './Library/books/books.component'
import { SearchComponent } from './Library/search/search.component'
import { SplashComponent } from './Shared/splash/splash.component';


const routes: Routes = [   
  { path: "search", component: SearchComponent },
  { path: "books", component: BooksComponent },
  { path: "", component: SplashComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
