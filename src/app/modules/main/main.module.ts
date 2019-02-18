import { NgModule } from '@angular/core';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { TaskComponent } from './task/task.component';
import { MainRoutingModule } from './main-routing.module';
import { TaskStatusComponent } from './dashboard/task-status/task-status.component';
import { FormsModule } from '@angular/forms';
import { TaskListComponent } from './dashboard/task-list/task-list.component';
import { CommonModule } from '@angular/common';
import { TaskDetailsComponent } from './dashboard/task-list/task-details/task-details.component';
import { BsDropdownModule } from 'ngx-bootstrap';


@NgModule({
  declarations: [
    MenuComponent,
    DashboardComponent,
    HeaderComponent,
    MainComponent,
    TaskComponent,
    TaskStatusComponent,
    TaskDetailsComponent,
    TaskListComponent,
  ],
  imports: [
    MainRoutingModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    CommonModule,
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class MainModule { }
