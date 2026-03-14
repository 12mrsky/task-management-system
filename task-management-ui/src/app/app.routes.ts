import { Routes } from '@angular/router';

import { LoginComponent } from './components/login/login';
import { RegisterComponent } from './components/register/register';

import { DashboardComponent } from './components/dashboard/dashboard';
import { TaskComponent } from './components/task/task';
import { AddTaskComponent } from './components/add-task/add-task';
import { EditTaskComponent } from './components/edit-task/edit-task';

import { MainLayout } from './layout/main-layout/main-layout';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [

{ path:'', component:LoginComponent },

{ path:'register', component:RegisterComponent },

{
path:'',
component:MainLayout,
canActivate:[authGuard],
children:[

{ path:'dashboard', component:DashboardComponent },
{ path:'tasks', component:TaskComponent },
{ path:'add-task', component:AddTaskComponent },

// ⭐ EDIT PAGE ROUTE
{ path:'edit-task/:id', component:EditTaskComponent }

]
}

];