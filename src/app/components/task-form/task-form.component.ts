import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent implements OnInit {
  title: string = '';
  isFav: boolean = false;
  ngOnInit(): void {}

  toggleAddTask() {
    console.log('toggle');
  }
}
