import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class LibraryDetailsModule { 
  id?:number;
  bookId?:number;
  title?:string;
  author?:string;
  genre?:string;
  numberOfCopies?:number;
  publisher?:string;
  publicationYear?:number;
}
