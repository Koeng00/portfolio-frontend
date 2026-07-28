import { Routes } from '@angular/router';
import { ProjectList } from './components/project-list/project-list';
import { Home } from './components/home/home';
import { ProjectForm } from './components/project-form/project-form';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'projects', component: ProjectList},
    {path: 'form', component: ProjectForm}
];
