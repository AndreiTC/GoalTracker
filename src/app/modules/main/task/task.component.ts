import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/shared/models/task.model';
import { MainService } from '../main.service';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  task = 
  {
    category:'',
    description:'',
    difficulty: {
      difficultyLevel: ''
    }
  } as Task;
  constructor(private mainService:MainService) { }

  ngOnInit() {

  }

  addTask()
  {
    this.mainService.addTask(this.task).subscribe();
  }
}
