import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  

  name = 'Mohit';
  author = 'clean code';
  
  isDisabled: boolean = false;
  constructor() { }

  handleClick(){
    this.isDisabled = true ;
  }
  ngOnInit(): void {
  }

  myName:string =" ";

  isShowing:boolean = true;
}
