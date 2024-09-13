import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit {
  private professions: string[] = ['Product Engineer', 'Python Developer', 'IoT System Designer', 'Full Stack Development'];
  private currentProfessionIndex = 0;

  ngAfterViewInit() {
    this.showGreeting();
  }

  private showGreeting() {
    const greetingElement = document.getElementById('greeting');
    const greetingImElement = document.getElementById('greeting-im')
    const nameElement = document.getElementById('name');
    const professionElement = document.getElementById('profession');
    const knowMoreElement = document.getElementById('know-more');

    if (greetingElement) {
      greetingElement.classList.remove('fade-out');

      setTimeout(() => {
        greetingElement.classList.add('fade-out');
        if (nameElement) {
          nameElement.classList.remove('fade-out');
          nameElement.classList.add('fade-in');

          setTimeout(() => {
            nameElement.classList.add('fade-out');
            this.displayProfession();

            setTimeout(() => {
              if (knowMoreElement) {
                knowMoreElement.classList.remove('fade-out');
                knowMoreElement.classList.add('fade-in');
              }
            }, 15000); // Adjust as needed
          }, 1000); // Adjust as needed
        }
      }, 1800); // Typing effect duration + buffer
    }
  }

  private displayProfession() {
    const professionElement = document.getElementById('profession');
    if (!professionElement) return;

    professionElement.classList.add('fade-in');
    professionElement.textContent = this.professions[this.currentProfessionIndex];

    setInterval(() => {
      professionElement.classList.add('fade-out');

      setTimeout(() => {
        professionElement.textContent = this.professions[this.currentProfessionIndex];
        professionElement.classList.remove('fade-out');
        professionElement.classList.add('fade-in');

        this.currentProfessionIndex = (this.currentProfessionIndex + 1) % this.professions.length;
      }, 500); // Adjust the timeout duration as needed

      professionElement.classList.remove('fade-in');
    }, 3000); // Adjust as needed
  }
}
