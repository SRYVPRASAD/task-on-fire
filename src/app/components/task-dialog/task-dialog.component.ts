import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Task, TaskDialogData } from '../../types';

@Component({
  selector: 'app-task-dialog',
  template: `<mat-form-field>
      <mat-label>Title</mat-label>
      <input matInput cdkFocusInitial [(ngModel)]="data.task.title" />
    </mat-form-field>

    <mat-form-field>
      <mat-label>Description</mat-label>
      <textarea matInput [(ngModel)]="data.task.description"></textarea>
    </mat-form-field>

    <div mat-dialog-actions>
      <button mat-button [mat-dialog-close]="{ task: data.task }">OK</button>
      <button mat-button (click)="cancel()">Cancel</button>
      <button
        *ngIf="data.enableDelete"
        mat-fab
        color="primary"
        aria-label="Delete"
        [mat-dialog-close]="{ task: data.task, delete: true }"
      >
        <mat-icon>delete</mat-icon>
      </button>
    </div> `,

  styleUrls: ['./task-dialog.component.css'],
})
export class TaskDialogComponent {
  private backupTask: Partial<Task> = { ...this.data.task };

  constructor(
    public dialogRef: MatDialogRef<TaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TaskDialogData
  ) {}

  cancel(): void {
    this.data.task.title = this.backupTask.title;
    this.data.task.description = this.backupTask.description;
    this.dialogRef.close(this.data);
  }
}