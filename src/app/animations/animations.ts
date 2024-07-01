import { trigger, transition, style, animate } from '@angular/animations';


export const slideInAnimation = trigger('routeAnimations', [
  transition('* => *', [
    style({ transform: 'translateX(100%)' }), // Starting position
    animate('0.9s ease-out', style({ transform: 'translateX(0)' })), // Ending position with ease-out effect
  ]),
]);
export const slideInAnimationY = trigger('routeAnimations', [
  transition('* => *', [
    style({ transform: 'translateX(100%)' }), // Starting position
    animate('0.8s ease-out', style({ transform: 'translateX(0)' })), // Ending position with ease-out effect
  ]),
]);
export const fadeInAnimation = trigger('fadeInAnimation', [
  transition(':enter', [
    style({ opacity: 0 }), // Initially transparent
    animate('0.9s ease-in-out', style({ opacity: 1 })) // Fade in to full opacity
  ])
]);