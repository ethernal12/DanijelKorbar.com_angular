import { trigger, transition, style, animate } from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
  transition('* => *', [
    style({ transform: 'translateX(100%)' }), // Zacetna pozicija
    animate('0.5s ease-in-out', style({ transform: 'translateX(0)' })), // Koncna pozicija
  ]),
]);