import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: any[] = []; // Initialize an empty array to store projects

  constructor() {
    // Sample projects (optional)
    this.projects = [ 
      {'name': 'GenAI Cold Email Generator', "link": 'https://genai-cold-email-generator.onrender.com'},
      {'name': 'IoT Device Manager', "link": ''}
    ];
  }

  // Add a project to the list
  addProject(project: any): void {
    this.projects.push(project);
  }

  // Get the list of all projects
  getProjects(): any[] {
    return this.projects;
  }
}
