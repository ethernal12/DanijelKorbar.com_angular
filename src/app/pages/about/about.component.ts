import {Component, OnInit} from '@angular/core';
import {fadeInAnimation, slideInAnimation} from 'src/app/animations/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [slideInAnimation, fadeInAnimation ],
})
export class AboutComponent implements OnInit{
  fadeInComplete = false;
  onSlideAnimationDone() {

    // Animation callback when slide animation is complete
    this.fadeInComplete = true;
  }

  images = [

    { src: '../../../assets/images/tenis_enhanced.png', alt: 'Image 2' },
    { src: '../../../assets/images/surf3_enhanced.png', alt: 'Image 1' },
    { src: '../../../assets/images/sea_enhanced.png', alt: 'Image 3' },
    // Add more images as needed
  ];

  currentIndex = 0;
  animationInProgress = false;

  ngOnInit(): void {

    this.startSlideshow();
  }

  startSlideshow(): void {

    setInterval(() => {
      if (this.animationInProgress) {
        this.nextImage();

      }
    }, 5000); // Time between slides in milliseconds
  }

  nextImage(): void {
    const newIndex = (this.currentIndex + 1) % this.images.length;
    this.currentIndex = newIndex;
  }

  imageLoaded(): void {
    this.animationInProgress = true;
  }
  animationDone = false;
  animationEnd(): void {
    this.animationDone = true;
    console.log(this.animationDone , 'animation done')
    this.animationInProgress = false;
  }

  transitionEnd(): void {
    // Handle any logic after transition ends (if needed)
  }

}

