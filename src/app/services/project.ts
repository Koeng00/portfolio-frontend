import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {

  private projects: Project[] = [
    {
      id: 1,
      title: 'Portfolio Site',
      description: 'A personal portfolio built with Angular and Spring Boot',
      techStack: ['Angular', 'TypeScript', 'Spring Boot'],
      githubUrl: 'https://github.com/tkcoder/portfolio'
    },
    {
      id: 2,
      title: 'University Management System',
      description: 'Backend system with JWT auth and course management',
      techStack: ['Java', 'Spring Boot', 'PostgreSQL']
    }
  ];

  getProjects() :Project[]
  {
    return this.projects;
  }
}
