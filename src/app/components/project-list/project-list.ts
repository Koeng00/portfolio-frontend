import { Component } from '@angular/core';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../services/project';
import { ProjectCard } from "../project-card/project-card";
import { CommonModule } from '@angular/common';
import fa from '@angular/common/locales/fa';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [ProjectCard, CommonModule],
  templateUrl: './project-list.html',
  styleUrl: './project-list.css',
})
export class ProjectList {

  projects: Project[] = [];
  loading = true;
  error = false;

  constructor(private projectService: ProjectService){}

  ngOnInit(): void{
    this.projectService.getProjects().subscribe({
      next: (data) => {
        this.projects = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Failed to load projects', err);
        this.error = true;
        this.loading = false;
      }
    })
  }
}
