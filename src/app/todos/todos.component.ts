import { Component, OnInit , ChangeDetectionStrategy , Input , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-todos',
  template: `
  <p *ngIf="todos.pending">LOADING TODO LIST ...</p>
  <app-todo [todo]="todo"
            *ngFor="let todo of todos.data"
            (toggle)="toggle.next($event)">
  </app-todo>
  <p *ngIf="todos.error">{{todos.error}}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosComponent {
  @Input() todos;
  @Output() toggle = new EventEmitter<any>();
}
