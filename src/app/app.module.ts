import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';


import { TodoComponent } from './todo/todo.component';
import { TodosComponent } from './todos/todos.component';
import { TodosService } from './todos.service';
import { TodosEffects } from './todos.effects';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { todos } from './todos.reducer';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodosComponent,
    AddTodoComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    StoreModule.forRoot({todos}),
    EffectsModule.forRoot([TodosEffects]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [TodosService],
  bootstrap: [AppComponent]
})
export class AppModule {
}