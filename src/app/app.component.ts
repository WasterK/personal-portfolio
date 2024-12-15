import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div>
      <app-hero></app-hero>
      <app-about></app-about>
      <app-skills></app-skills>
      <app-portfolio></app-portfolio>
      <app-contact></app-contact>
      <footer>
        <p>&copy; 2024 Kiran Khaire. All rights reserved.</p>
      </footer>
    </div>
  `,
  imports: [HeroComponent, AboutComponent, SkillsComponent, PortfolioComponent, ContactComponent],
  styles: [`
    footer {
      text-align: center;
      padding: 1rem;
      background-color: #f8f9fa;
    }
  `]
})
export class AppComponent {}
