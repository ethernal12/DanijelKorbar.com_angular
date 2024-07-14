import { Component } from '@angular/core';
import { slideInAnimation } from 'src/app/animations/animations';

@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.scss'],
  animations: [slideInAnimation],
})
export class BiographyComponent {

}
