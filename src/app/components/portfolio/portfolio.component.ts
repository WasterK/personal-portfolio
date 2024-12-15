import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  projects = [
    { name: 'IoT Device Management System', description: 'Client-server architecture for managing IoT devices', link: 'https://github.com/WasterK/KWS-IoT-Backend',tryLink: 'https://kws-pmd-web.onrender.com', show: true },
    { name: 'GenAI: Cold Email Generator', description: 'AI-powered cold email generator which matches porfolios with job descriptions', link: 'https://github.com/WasterK/GenAI-cold-email-generator', tryLink: 'https://genai-cold-email-generator.onrender.com', show: true},
    { name: 'Digi Home', description: 'Web-based application for monitoring temperaton, humidity', link: 'https://github.com/WasterK/tc-workshop-digihome', show: true },
    { name: 'Air Suspension Hose Leak Detection', description: 'Windows-based industrial automation system for leak detection of automobile parts'}
  ];
}
