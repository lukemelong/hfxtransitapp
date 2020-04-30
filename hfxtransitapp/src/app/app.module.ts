import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Bookapi } from './Library/Books/bookapi.service/bookapi.service.component';
import { BooksComponent } from './Library/books/books.component';

@NgModule({
  declarations: [
    AppComponent,
    Bookapi.ServiceComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
