import { Routes } from '@angular/router';

import { LoginComponent } from './components/login/login';
import { RegisterComponent } from './components/register/register';

import { DashboardComponent } from './components/dashboard/dashboard';
import { TaskComponent } from './components/task/task';
import { AddTaskComponent } from './components/add-task/add-task';
import { EditTaskComponent } from './components/edit-task/edit-task';

import { MainLayout } from './layout/main-layout/main-layout';
import { authGuard } from './guards/auth-guard';

import { ManageUsersComponent } from './components/manage-users/manage-users';

export const routes: Routes = [

  // Public routes
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // Protected routes with layout
  {
    path: '',
    component: MainLayout,
    canActivate: [authGuard],
    children: [

      { path: 'dashboard', component: DashboardComponent },
      { path: 'tasks', component: TaskComponent },
      { path: 'add-task', component: AddTaskComponent },

      // Edit task
      { path: 'edit-task/:id', component: EditTaskComponent },

      // ⭐ Manage Users (FIXED)
      { path: 'manage-users', component: ManageUsersComponent }

    ]
  }

];