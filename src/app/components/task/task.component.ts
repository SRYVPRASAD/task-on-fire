import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../types';

@Component({
  selector: 'app-task',
  template: `<mat-card class="item" *ngIf="task" (dblclick)="edit.emit(task)">
    <h2>{{ task.title }}</h2>
    <p>
      {{ task.description }}
    </p>
  </mat-card>`,

  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  @Input() task: Task | null = null;
  @Output() edit = new EventEmitter<Task>();
}
