import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './Library/Books/books.component'
import { SearchComponent } from './Library/Search/search.component'
import { SplashComponent } from './Shared/splash/splash.component';


const routes: Routes = [
  { path: '/app-books', component: BooksComponent },
  { path: '/app-search', component: SearchComponent },
  { path: '/', component: SplashComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
