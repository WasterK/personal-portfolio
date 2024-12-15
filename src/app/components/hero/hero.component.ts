import { Component } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1.5s ease-out', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class HeroComponent {
  downloadResume() {
    console.log('downloading resume');
  }

  scrollToPortfolio() {
    const portfolioElement = document.getElementById('portfolio');
    if (portfolioElement) {
        // Calculate the distance from the top of the page to the portfolio section
        const targetPosition = portfolioElement.offsetTop;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        const duration = 1000; // Duration of the scroll in milliseconds
        let startTime: number | null = null;

        // Ease-in-out function for smoother scrolling
        const ease = (t: number, b: number, c: number, d: number): number => {
            t /= d / 2;
            if (t < 1) return (c / 2) * t * t + b;
            t--;
            return (-c / 2) * (t * (t - 2) - 1) + b;
        };

        // Animation loop
        const animation = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const scrollAmount = ease(timeElapsed, startPosition, distance, duration);

            // Scroll without triggering the default scrollbar
            document.documentElement.scrollTop = scrollAmount;
            document.body.scrollTop = scrollAmount; // For older browsers

            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            } else {
                // Ensure it's exactly at the target position at the end
                document.documentElement.scrollTop = targetPosition;
                document.body.scrollTop = targetPosition; // For older browsers
            }
        };

        requestAnimationFrame(animation);
    }
  }
  
  scrollToContact() {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
        // Calculate the distance from the top of the page to the contact section
        const targetPosition = contactElement.offsetTop;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        const duration = 1000; // Duration of the scroll in milliseconds
        let startTime: number | null = null;

        // Ease-in-out function for smoother scrolling
        const ease = (t: number, b: number, c: number, d: number): number => {
            t /= d / 2;
            if (t < 1) return (c / 2) * t * t + b;
            t--;
            return (-c / 2) * (t * (t - 2) - 1) + b;
        };

        // Animation loop
        const animation = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const scrollAmount = ease(timeElapsed, startPosition, distance, duration);

            // Scroll without triggering the default scrollbar
            document.documentElement.scrollTop = scrollAmount;
            document.body.scrollTop = scrollAmount; // For older browsers

            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            } else {
                // Ensure it's exactly at the target position at the end
                document.documentElement.scrollTop = targetPosition;
                document.body.scrollTop = targetPosition; // For older browsers
            }
        };

        requestAnimationFrame(animation);
    }
}


  contactMe() {
    console.log('contacting me');
  }

}
