import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'prueba_5g';

  show=false;
  ngOnInit(): void {
  }

  showCart(){

    return this.show=!this.show;

  }

}
