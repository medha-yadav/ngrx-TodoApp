import { Injectable } from '@angular/core';
import { Actions, Effect  } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { GET_TODOS, GET_TODOS_SUCCESS, GET_TODOS_ERROR, ADD_TODO, ADD_TODO_SUCCESS, ADD_TODO_ERROR } from './todos.reducer';
import { TodosService } from './todos.service';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TodosEffects {
  constructor( private actions$: Actions,  private todosService: TodosService ) {
  }

  @Effect()
  getTodos$ = this.actions$
            .ofType(GET_TODOS)
            .switchMap(action => this.todosService.getTodos()
           .map(todos => ({type: GET_TODOS_SUCCESS, payload: todos}))
           .catch(() => Observable.of({type: GET_TODOS_ERROR})));
  @Effect()
  addTodo$ = this.actions$
           .ofType(ADD_TODO)
           .switchMap(action => this.todosService.addTodo(action)
          .map(todo => ({type: ADD_TODO_SUCCESS, payload: todo}))
          .catch(() => Observable.of({type: ADD_TODO_ERROR})));
}