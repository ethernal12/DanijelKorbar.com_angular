import {Component, Input} from '@angular/core';
import {ButtonToolbarComponent} from "../../ui/parts/buttons/button-toolbar.component";
import {ButtonToolbarModel} from "../../ui/parts/buttons/button-toolbar-model";
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-app-toolbar',
  templateUrl: './app-toolbar.component.html',
  styleUrls: ['./app-toolbar.component.css']
})
export class AppToolbarComponent {
  constructor(private router: Router) {
  }
  styles: string = "background-color: white; color: black; border:none;cursor: pointer"
  @Input() navGumbi: ButtonToolbarModel[] = [
    {
      tekst: "Home",
      ikona: "icon-name",
      route: "",
      style: this.styles,
      // other style properties
      onClick: () => {
      }
    },
    {
      tekst: "About me",
      ikona: "icon-name",
      route: "/about",
      style: this.styles,
      onClick: () => {
        // Custom click behavior for Button 2
      }
    },
    {
      tekst: "Biography",
      ikona: "icon-name",
      route: "/biography",
      style: this.styles,
      onClick: () => {
        // Custom click behavior for Button 3
      }
    },
    {
      tekst: "Contact",
      ikona: "icon-name",
      route: "/contact",
      style: this.styles,
      onClick: () => {
        // Custom click behavior for Button 4
      }
    },
    {
      tekst: "GitHub repositories",
      ikona: "icon-name",
      route: "/gitHub",
      style: this.styles,
      onClick: () => {
        // Custom click behavior for Button 5
      }
    }
  ];

  isRouteActive(route: string | undefined): boolean
  {
    if (route === undefined || route === '') {
      return this.router.isActive('/', true);
    }
    return this.router.isActive(route, true);
  }
}
