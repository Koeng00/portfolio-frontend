import { Component } from '@angular/core';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../services/project';
import { ProjectCard } from "../project-card/project-card";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [ProjectCard, CommonModule],
  templateUrl: './project-list.html',
  styleUrl: './project-list.css',
})
export class ProjectList {

  projects: Project[] = [];

  constructor(private projectService: ProjectService){
    this.projects = this.projectService.getProjects();
  }
}
