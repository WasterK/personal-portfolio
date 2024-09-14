import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit {
  private professions: string[] = ['Product Engineer', 'Python Developer', 'IoT System Designer', 'Full Stack Developer'];
  private currentProfessionIndex = 0;

  ngAfterViewInit() {
    this.showGreeting();
  }

  private showGreeting() {
    const helloElement = document.getElementById('hello');
    const greetingImElement = document.getElementById('greetingim');
    const nameElement = document.getElementById('name');
    const knowMoreElement = document.getElementById('know-more');
  
    if (helloElement) {
      helloElement.parentElement?.classList.remove('fade-out'); // Ensure parent is visible
      helloElement.classList.remove('fade-out');
  
      // Reset typing effect
      helloElement.classList.add('typing-text');
      setTimeout(() => helloElement.classList.remove('typing-text'), 2000); // Adjust timing to match typing animation duration
  
      setTimeout(() => {
        if (greetingImElement) {
          greetingImElement.classList.remove('fade-out');
          greetingImElement.classList.add('typing-text');
          
          setTimeout(() => greetingImElement.classList.remove('typing-text'), 500); // Adjust timing
          
          setTimeout(() => {
            helloElement.classList.add('fade-out');
            greetingImElement.classList.add('fade-out');
  
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
              }, 500); // Adjust as needed for name fade-out duration
            }
          }, 2000); // Adjust as needed for "I am" display duration
        }
      }, 2000); // Adjust as needed for "Hello" display duration
    }
  }
  
  private displayProfession() {
    const professionElement = document.getElementById('profession');
    if (!professionElement) return;
  
    professionElement.classList.add('fade-in');
  
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
