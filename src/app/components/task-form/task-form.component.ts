import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  id?: number | null;
  taskTitle: string;
  reminder: boolean = false;
  isFavorite: boolean = false;
  day: string;
  showAddTask: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }
  ngOnInit(): void {}

  toggleAddTask() {
    console.log('toggle');
  }

  onSubmit() {
    if (!this.taskTitle) {
      alert('Please add a task!');
      return;
    }
    const newTask = {
      id: this.id,
      taskTitle: this.taskTitle,
      reminder: this.reminder,
      isFavorite: this.isFavorite,
      day: this.day,
    };

    //emit event

    this.onAddTask.emit(newTask);

    (this.id = null),
      (this.taskTitle = ''),
      (this.reminder = false),
      (this.isFavorite = false),
      (this.day = '');
  }
}
