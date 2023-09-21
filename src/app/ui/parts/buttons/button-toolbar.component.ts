import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-button-toolbar',
  templateUrl: './button-toolbar.component.html',
  styleUrls: ['./button-toolbar.component.css']
})
export class ButtonToolbarComponent {
  //activeStyles: string = "background-color: black; color: white; border:none;cursor: pointer"
  @Input() activeStyles: string = "";
  @Input() tekst: string = "";
  @Input() ikona: string = "";
  @Input() route: string | undefined = "";
  @Input() style: string | undefined = "";
  @Input() onClick: () => void = () => {

  }
}
