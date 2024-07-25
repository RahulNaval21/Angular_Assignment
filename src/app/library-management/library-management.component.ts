import { Component, EventEmitter, Input, Output, output } from '@angular/core';
// interface Book {
//   bookId: number;
//   title: string;
//   author: string;
//   genre: string;
//   numberOfCopies: number;
//   publisher: string;
//   publicationYear: number;
// }
import { LibService } from '../lib.service';
import { LibraryDetailsModule } from '../../models/library-details/library-details.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'library-management',
  templateUrl: './library-management.component.html',
  styleUrl: './library-management.component.scss'
})
export class LibraryManagementComponent {
books: any;
editingBookForm: FormGroup;

// LibraryDetailsModule: any;
 //books: LibraryDetailsModule | null | undefined;

 
  constructor(private libService: LibService, private fb: FormBuilder, private active :ActivatedRoute){
    if(Number(active.snapshot.paramMap.get('newId'))===1)
      this.showBookForm=true;

    if(Number(active.snapshot.paramMap.get('newId2'))===1)
      this.showBookForm=true;

    this.editingBookForm = this.fb.group({
      id: ['', Validators.required],
      bookId: [null],
      title: ['', Validators.required],
      author: ['', Validators.required],
      genre: ['', Validators.required],
      numberOfCopies: [0, [Validators.required, Validators.min(0)]],
      publisher: ['', Validators.required],
      publicationYear: [null, [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]]
    });
  }

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData():void{
    this.libService.getAllBookData()
    
  }

  get Books(): LibraryDetailsModule[]{
    return this.libService.books;
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

  addData(): void {
    this.libService.addData(this.newBook);
  }


  dltData(id: any): void {
    this.libService.dltData(id);
  }

  onView(){
    this.libService.getSingleBookData(3);
  }

  editingBook: any = null;

  // onEdit(id:any,bookData:any){
  //   this.libService.editBookData(id,bookData);
  // }
  showEditForm = false;
  showBookForm = false;
  onEdit(book:any){
    this.showEditForm = true;
    this.editingBookForm.patchValue(book); 
  }
 
 
  saveChanges(): void {
    
    if (this.editingBookForm.valid) {
      console.log("reached here")
      const updatedBook = this.editingBookForm.value;
      //console.log(updatedBook)
      this.libService.updateBook(updatedBook.id, updatedBook).subscribe({
        next: (response) => {
          console.log('Book updated successfully', response);
          this.getAllData(); // Reload books after updating
          this.editingBookForm.reset(); // Clear the form
        },
        error: (error) => {
          console.error('Error updating book', error);
        }
      });
    }
    this.showEditForm = false;
  }
}
