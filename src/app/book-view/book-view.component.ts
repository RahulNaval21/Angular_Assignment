import { Component } from '@angular/core';
import { LibraryDetailsModule } from '../../models/library-details/library-details.module';
import { ActivatedRoute } from '@angular/router';
import { LibService } from '../lib.service';
import { Router } from '@angular/router';
@Component({
  selector: 'books',
  templateUrl: './book-view.component.html',
  styleUrl: './book-view.component.scss'
})
export class BookViewComponent {
  book: LibraryDetailsModule | undefined;

  constructor(private route:ActivatedRoute, private libService:LibService, private router: Router){

  }
  newId2 !:number;
  onClick(){
    this.newId2=1;
    this.router.navigate(['library',this.newId2]);
  }


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const bookId = +params.get('id')!;
      if (bookId) {
        this.libService.getSingleBookData(bookId).subscribe({
          next: (response) => {
            this.book = response;
          },
          error: (error) => {
            console.error('Error fetching book details', error);
          }
        });
      }
    });
  }
}
