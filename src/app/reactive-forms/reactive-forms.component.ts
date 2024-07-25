import { Component } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { LibService } from '../lib.service';
import { nonNegativeIntegerValidator } from './nonNegativeIntegerValidator';
import { Router } from '@angular/router';
import {uniqueBookIdValidator} from '../uniqueIdValidator'
import { title } from 'process';


@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})

export class ReactiveFormsComponent {
  userGroup: FormGroup;
  existingBookIds: string[] = [''];
  constructor(private libService: LibService, private router:Router) {
    
    this.userGroup = new FormGroup({
     
      bookId: new FormControl('', [ Validators.required, uniqueBookIdValidator(this.existingBookIds) ]),
      id: new FormControl(),

      // id: new FormControl('', {
      //   validators: [
      //     Validators.required,
      //     this.uniqueIdValidator.bind(this) // Bind the context of 'this' for the validator
      //   ],
      //   updateOn: 'blur' // Update validation on blur
      // }),

      title: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      author:new FormControl('', [Validators.required,
        Validators.pattern(/^[a-zA-Z\s]+$/)]),
      genre: new FormControl('', [Validators.required]),
      numberOfCopies: new FormControl('', [Validators.required,Validators.pattern(/^[1-9][0-9]*$/)]),
      publisher: new FormControl(),
      publicationYear: new FormControl('', [Validators.required, Validators.min(1900),Validators.max(2024)]),
    });
  }

  ngOnInit(): void {
    // Simulate fetching existing bookIds from a service or API
    this.fetchExistingBookIds();
  }

  fetchExistingBookIds(): void {
    
    setTimeout(() => {
      this.existingBookIds = ['2']; // Replace with actual data
      console.log('Existing BookIds:', this.existingBookIds);

      const bookIdControl = this.userGroup.get('bookId');
      if (bookIdControl) {
        bookIdControl.setValidators([Validators.required, uniqueBookIdValidator(this.existingBookIds)]);
        bookIdControl.updateValueAndValidity(); // Trigger validation update
      }
    }, 1000);
    
  }

  // uniqueIdValidator(control: FormControl): ValidationErrors | null {
  //   const validator = new uniqueBookIdValidator(); 
  //   validator.existingIds = this.existingBookIds; 
  //   return validator.validate(control); 
  // }
   newId !:number;
  onSubmit(){
    const bookId = this.userGroup.get('bookId')!.value;
  if (this.existingBookIds.includes(bookId)) {
    alert('You are assigning an already used bookId. Please choose a different one.');
    return;
  }

    if (this.userGroup.invalid) {
      // Display an alert for missing fields
      alert('Please fill out all required fields.');
      return;
    }

// if(uniqueBookIdValidator(this.existingBookIds)){
//   alert("you are assigning existing bookId");
//   return;
// }


    console.log(this.userGroup.value)
    this.libService.addData(this.userGroup.value);
    this.newId=1;
    this.router.navigate(['library',this.newId]);
  }

  onClick(){
    this.newId = 1;
    this.router.navigate(['library',this.newId]);
  }

  // onSubmit() {
  //   if (this.userGroup.valid) {
  //     console.log(this.userGroup.value);
  //     this.libService.addData(this.userGroup.value);
     
  //   } else {
      
  //     this.userGroup.markAllAsTouched(); // Mark all fields as touched to display validation messages
  //   }

  //   this.router.navigate(['/library-management']);
  // }
  }