import {Component, OnInit} from '@angular/core';
import {fadeInAnimation, slideInAnimation} from 'src/app/animations/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [slideInAnimation, fadeInAnimation ],
})
export class AboutComponent implements OnInit{
  fadeInComplete = false;
  onSlideAnimationDone() {

    // Animation callback when slide animation is complete
    this.fadeInComplete = true;
  }


  images = [
    { src: '../../../assets/images/surf2.jpg', alt: 'Image 1' },
    { src: '../../../assets/images/teni.jpg', alt: 'Image 2' },
    { src: '../../../assets/images/sea.jpg', alt: 'Image 3' },
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

  animationEnd(): void {
    this.animationInProgress = false;
  }

  transitionEnd(): void {
    // Handle any logic after transition ends (if needed)
  }

}

