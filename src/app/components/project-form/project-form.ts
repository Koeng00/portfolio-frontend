import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-project-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './project-form.html',
  styleUrl: './project-form.css',
})
export class ProjectForm {

  projectForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    techStack: new FormControl(''),
    githubUrl: new FormControl('')
  })

  onSubmit(){

    if (this.projectForm.invalid)
    {
      return;
    }

    const formValues = this.projectForm.value;

    const newProjects = {
      title: formValues.title!,
      description: formValues.description!,
      techStack: formValues.techStack ? formValues.techStack.split(',').map(t => t.trim()) : [],
      githubUrl: formValues.githubUrl || undefined
    }

    console.log("New project: ", newProjects);
  }
}
