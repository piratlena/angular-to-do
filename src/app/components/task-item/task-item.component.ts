import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { Tasks } from '../../mock-tasks';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Output() onToggleFav: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();

  ngOnInit(): void {}

  onSwitch(task: Task) {
    this.onToggleReminder.emit(task);
  }
  onToggle(task: Task) {
    this.onToggleFav.emit(task);
  }
  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }
}
