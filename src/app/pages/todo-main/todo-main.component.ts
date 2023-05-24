import { Component, OnInit } from '@angular/core';
import { Todo } from './TodoData';

@Component({
  selector: 'app-todo-main',
  templateUrl: './todo-main.component.html',
  styleUrls: ['./todo-main.component.scss']
})
export class TodoMainComponent implements OnInit {
  todos: Todo[] = []

  constructor() {
    this.todos  = [
      {id: 1, title: 'First Todo', desc: 'This is First Todo', active: false},
      {id: 2, title: 'Second Todo', desc: 'This is Second Todo', active: false},
      {id: 3, title: 'Third Todo', desc: 'This is Third Todo', active: false},
    ]
   }

  ngOnInit(): void {
    this.OnInitialization()
  }
  ngAfterContentInit(): void {
    this.AfterInit()
  }
  
  OnInitialization () {
    console.log('it is from ngOnInit')
  }

  AfterInit () {
    console.log('it is from AfterInit')
  }

  ngOnChanges(e: string) {
    console.log('it is from ngOnChanges')
  }

  ngDoCheck() {
    console.log('it is from ngDoCheck')
    
  }

  DeleteTodo(e: Todo){
    const ind = this.todos.indexOf(e);
    this.todos.splice(ind, 1)
  }
  CreateTodo(e: Todo){
    this.todos.push(e)
    this.ngOnChanges('changes')
  }
}
