import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/Task';
import { Tasks } from '../../mock-tasks';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = Tasks;

  ngOnInit(): void {}
}
