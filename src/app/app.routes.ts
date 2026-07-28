import { Routes } from '@angular/router';
import { ProjectList } from './components/project-list/project-list';
import { Home } from './components/home/home';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'projects', component: ProjectList}
];
