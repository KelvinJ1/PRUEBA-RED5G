import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit {
   a = 0;
   number=0;
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){


  }

    plus(){
      this.a++;
      this.number=this.a;
      return this.number;
    }

    minus(){
      this.a--;
      this.number=this.a;
      return this.number;
    }

  
    
}
