import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './Library/books/books.component';
import { SearchComponent } from './Library/search/search.component';
import { SplashComponent } from './Shared/splash/splash.component';


@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    SearchComponent,
    SplashComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
