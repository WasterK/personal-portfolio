import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  constructor(
    private projectService: ProjectService

  ) {}

  ngOnInit(): void {
    setTimeout(() => {
        this.loadProjects();
    }, 100); // Delay the loading of projects to see the animation
  }

  onProjectClick(name: string) {
    console.log(`Opening Project ${name}}`)
  }

  // Load projects from the service
  loadProjects(): any[] {
    let projectData = this.projectService.getProjects()
    console.log(`data from service : ${projectData}`)
    return projectData;
  }

  openProjectInNewTab(event: Event, link: string) {
    event.stopPropagation(); // Prevents the card's click event
    window.open(link, '_blank');
  }
}
