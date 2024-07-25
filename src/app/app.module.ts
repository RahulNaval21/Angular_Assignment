import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SupplierManagementComponent } from './supplier-management/supplier-management.component';
import { LibraryManagementComponent } from './library-management/library-management.component';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { NewDirective } from './new.directive';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PipesComponent } from './pipes/pipes.component';
import { BookViewComponent } from './book-view/book-view.component';

@NgModule({
  declarations: [
    AppComponent,
    SupplierManagementComponent,
    LibraryManagementComponent,
    NewDirective,
    ReactiveFormsComponent,
    PipesComponent,
    BookViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
