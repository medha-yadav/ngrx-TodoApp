import { Component, OnInit , ChangeDetectionStrategy , Input , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-todo',
  template: `<p (click)="toggle.next(todo)"> {{todo.title | json}} </p>`
})
export class TodoComponent implements OnInit {

  @Input() todo;
  @Output() toggle = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

}
















// import { Component, OnInit, Input , Output , EventEmitter} from '@angular/core';
// export interface TODO {
//   name: string;
// }
// @Component({
//   selector: 'app-todo',
//   templateUrl: './todo.component.html',
//   styleUrls: ['./todo.component.css']
// })
// export class TodoComponent implements OnInit {
//   @Input() newtodo: TODO;
//   @Output() create = new EventEmitter();
//   saveTodo() {
//     this.create.emit({text: this.newtodo});
//     console.log(this.newtodo);
//     this.newtodo='';
//     console.log(this.newtodo);

//   }
//   constructor() { }

//   ngOnInit() {
//   }

// }
