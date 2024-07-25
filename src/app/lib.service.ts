import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LibraryDetailsModule } from '../models/library-details/library-details.module';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LibService {

 
  books: LibraryDetailsModule[] = [];
  getAllBookData() : void{

     this.httpClient.get<LibraryDetailsModule[]>('http://mockapi-dev.logisticsdev.intra/LibraryBooks').subscribe(res=>{
      
      console.log(res);
      this.books = res;
     })
      
    
  }

  getSingleBookData(id: any): Observable<LibraryDetailsModule> {
    return this.httpClient.get<LibraryDetailsModule>(`http://mockapi-dev.logisticsdev.intra/LibraryBooks/${id}`);
  }

  newBook: LibraryDetailsModule = {
    bookId:2,
  title:'Fundamentals of ph',
  author:'hc verma',
  genre:'physics',
  numberOfCopies:23,
  publisher:'bharti bhawan',
  publicationYear:2019,
  };

addData(newBook: LibraryDetailsModule) : void {
   this.httpClient.post('http://mockapi-dev.logisticsdev.intra/LibraryBooks', newBook).subscribe(res=>{
    console.log(res)
    this.getAllBookData();
   });
 
  
   this.router.navigate(['library/1']);
}


 dltData(bookId: string): void {
  this.httpClient.delete<LibraryDetailsModule[]>(`http://mockapi-dev.logisticsdev.intra/LibraryBooks/${bookId}`).subscribe(res => {
   console.log(res);
    
   this.getAllBookData();
  })
    
  ;
}


updateBook(bookId: number, bookData: any): Observable<any> {
  return this.httpClient.put<any>(`http://mockapi-dev.logisticsdev.intra/LibraryBooks/${bookId}`, bookData);
}

  constructor(private httpClient:HttpClient, private router:Router) {
    // this.books = [];
   }
}

