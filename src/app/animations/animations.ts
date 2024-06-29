import { trigger, transition, style, animate } from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
  transition('* => *', [
    style({ transform: 'translateX(100%)' }), // Zacetna pozicija
    animate('0.5s ease-in-out', style({ transform: 'translateX(0)' })), // Koncna pozicija
  ]),
]);

export const fadeInAnimation = trigger('fadeInAnimation', [
  transition(':enter', [
    style({ opacity: 0 }), // Initially transparent
    animate('0.5s ease-in-out', style({ opacity: 1 })) // Fade in to full opacity
  ])
]);