import { Component } from '@angular/core';
import { slideInAnimation } from 'src/app/animations/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  animations: [slideInAnimation],
})
export class HomeComponent {

}
