import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/mapTo';

import { Component, Injectable } from '@angular/core';

@Injectable()
export class TodosService {

  getTodos() {
    return Observable.timer(1000)
      .mapTo([{id: 1, title: 'learn ngrx/effect', completed: false}, {
              id: 2,  title: 'learn ngrx/store', completed: false,
      }]);
  }

  addTodo( title ) {
    return Observable.timer(1000)
      .mapTo({id: Math.random(), title, completed: false});
  }

}