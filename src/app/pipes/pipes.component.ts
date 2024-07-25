import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss'
})
export class PipesComponent {
  Decimal: number = 2.5512345678;
  Price:number = 200;
  Percentage: number = 57;
  date=new Date();
  UpperCase: string = 'rahul naval';
  LowerCase: string = 'RAHUL NAVAL';
}
