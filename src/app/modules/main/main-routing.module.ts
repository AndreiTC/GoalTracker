import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskComponent } from './task/task.component';
import { MainComponent } from './main/main.component';
import { AuthGuard } from 'src/app/shared/guards/auth-guard';

const routes: Routes = [
  {path: '', component: MainComponent , canActivate: [AuthGuard],
  children:[ 
    { path: '', pathMatch: 'full', redirectTo: 'dashboard'},
    { path: 'dashboard',  component: DashboardComponent  },
    { path: 'task', component: TaskComponent}
  ]}
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class MainRoutingModule { }
