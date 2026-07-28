import { Component } from '@angular/core';
import { TechItem } from '../../models/tech.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  techStack: TechItem[] = [
    { name: 'Java', category: 'core' },
    { name: 'Spring Boot', category: 'core' },
    { name: 'PostgreSQL', category: 'core' },
    { name: 'Git', category: 'core' },
    { name: 'TypeScript', category: 'growing' },
    { name: 'Angular', category: 'growing' },
    { name: 'Python / FastAPI', category: 'growing' },
    { name: 'Docker', category: 'growing' },
  ];

  coreCount = this.techStack.filter(t => t.category === 'core').length;
  growingCount = this.techStack.filter(t => t.category === 'growing').length;
}
