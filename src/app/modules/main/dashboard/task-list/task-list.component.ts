import { Component, OnInit } from '@angular/core';
import { MainService } from '../../main.service';
import { Task } from 'src/app/shared/models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  constructor(private mainService: MainService) { }
  taskList: Array<Task> = new Array<Task>();

  task: Task;

  users: any;
  ngOnInit() {
    this.mainService.getAllUsers().subscribe( response => {
        this.users = response;
        this.users.forEach(element => {
          console.log(element);
        });

      }, error => {
        console.log(error);
      });
    this.mainService.getTasks(0).subscribe( data => {
        this.taskList = data;
      });
    }
  showTaskDetails(task: Task) {
    this.task = task;
  }


}
