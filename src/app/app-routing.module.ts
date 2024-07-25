import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibraryManagementComponent } from './library-management/library-management.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { PipesComponent } from './pipes/pipes.component';
import { BookViewComponent } from './book-view/book-view.component';


const routes: Routes = [
  { path: 'library-management', component:  LibraryManagementComponent},
  { path: 'app-reactive-forms', component:  ReactiveFormsComponent},
  { path: 'app-pipes', component:  PipesComponent},
  { path: 'library-management/:id', component: BookViewComponent},
  { path: 'library/:newId', component: LibraryManagementComponent},
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
